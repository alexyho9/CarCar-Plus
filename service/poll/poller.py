import django
import os
import sys
import time
import json
import requests

sys.path.append("")
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "service_project.settings")
django.setup()

# Import models from service_rest, here. Ignore vs-code error hinting
# from service_rest.models import Something
from service_rest.models import AutomobileVO

def get_autos():
    response = requests.get("http://project-beta-inventory-api-1:8000/api/automobiles/")
    content = json.loads(response.content)

    for auto in content["autos"]:
            AutomobileVO.objects.update_or_create(
                 import_href=auto["href"],
                 defaults={
                      "vin": auto["vin"],
                      "sold": auto["sold"],
                 },
            )

def get_customers():
    response = requests.get("http://project-beta-sales-api-1:8000/api/customers/")
    content = json.loads(response.content)

    for customer in content["customers"]:
            AutomobileVO.objects.update_or_create(
                 import_href=customer["href"],
                 defaults={
                      "first_name": customer["first_name"],
                      "last_name": customer["last_name"],
                      "address": customer["address"],
                      "phone_number": customer["phone_number"],
                 },
            )



def poll(repeat=True):
    while True:
        print('Service poller polling for data')
        try:
            get_autos()
            # get_customers()
        except Exception as e:
            print(e, file=sys.stderr)

        if (not repeat):
            break

        time.sleep(15)


if __name__ == "__main__":
    poll()

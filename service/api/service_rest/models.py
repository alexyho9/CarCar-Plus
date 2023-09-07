from django.db import models
from django.urls import reverse

# Create your models here.
class AutomobileVO(models.Model):
    vin = models.CharField(max_length=17)
    sold = models.BooleanField()
    import_href = models.CharField(max_length=100, null=True)


class Technician(models.Model):
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    employee_id = models.CharField(max_length=50)

    def get_api_url(self):
        return reverse("api_technician", kwargs={"empid": self.employee_id})


class Appointment(models.Model):
    date_time = models.DateTimeField()
    reason = models.CharField(max_length=100)
    status = models.CharField(max_length=20, default="created")
    customer = models.CharField(max_length=200)
    technician = models.ForeignKey(
        Technician,
        related_name="appointments",
        on_delete=models.CASCADE
    )

    def finish(self):
        self.status = "finished"
        self.save()

    def cancel(self):
        self.status = "cancelled"
        self.save()

    def get_api_url(self):
        return reverse("api_appointment", kwargs={"pk": self.id})

    def __str__(self):
        return self.customer

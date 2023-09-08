from django.db import models
from django.urls import reverse


# Create your models here.
class AutomobileVO(models.Model):
    vin = models.CharField(max_length=17, unique=True)
    sold = models.BooleanField()
    import_href = models.CharField(max_length=100, null=True)


class Salesperson(models.Model):
    employee_id = models.CharField(max_length=50)
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)

    def get_api_url(self):
        return reverse("api_salesperson", kwargs={"empid": self.employee_id})

    def __str__(self):
        return "Associate: " + self.employee_id


class Customer(models.Model):
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    address = models.CharField(max_length=100)
    phone_number = models.CharField(max_length=12)

    def get_api_url(self):
        return reverse("api_customer", kwargs={"pk": self.id})

    def __str__(self):
        return "Customer: " + self.id


class Sale(models.Model):
    automobile = models.ForeignKey(
        AutomobileVO,
        related_name="sales",
        on_delete=models.CASCADE,
    )
    salesperson = models.ForeignKey(
        Salesperson,
        related_name="sales",
        on_delete=models.CASCADE,
    )
    customer = models.ForeignKey(
        Customer,
        related_name="sales",
        on_delete=models.CASCADE,
    )
    price = models.PositiveIntegerField()

    def get_api_url(self):
        return reverse("api_sale", kwargs={"pk": self.id})

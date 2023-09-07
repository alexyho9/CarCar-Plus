from django.urls import path
from .views import (
    api_technicians,
    api_technician,
    api_appointments,
    api_cancel_appointment,
    api_finish_appointment
    )

urlpatterns = [
    path("technicians/", api_technicians, name="api_technicians"),
    path("technician/<str:empid>/", api_technician, name="api_techician"),
    path("appointments/", api_appointments, name="api_appointments"),
    path("appointments/<int:pk>/finish/", api_finish_appointment, name="api_finish_appointment"),
    path("appointments/<int:pk>/cancel/", api_cancel_appointment, name="api_cancel_appointment"),
]

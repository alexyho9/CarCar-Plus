from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
import json
from .encoders import (
    AppointmentEncoder,
    AutomobileVOEncoder,
    TechnicianEncoder
    )
from .models import Appointment, Technician, AutomobileVO
# Create your views here.

@require_http_methods(["GET", "POST"])
def api_technicians(request):
    if request.method == "GET":
        technicians = Technician.objects.all()
        return JsonResponse(
            {"technicians": technicians},
            encoder=TechnicianEncoder,
        )
    else:
        try:
            content = json.loads(request.body)
            technician = Technician.objects.create(**content)
            return JsonResponse(
                technician,
                encoder=TechnicianEncoder,
                safe=False,
            )
        except:
            response = JsonResponse(
                {"message": "Could not create a technician"}
            )
            response.status_code = 400
            return response


@require_http_methods(["DELETE"])
def api_technician(request, empid):
    if request.method == "DELETE":
        try:
            technician = Technician.objects.get(employee_id=empid)
            technician.delete()
            return JsonResponse(
                technician,
                encoder=TechnicianEncoder,
                safe=False,
            )
        except Technician.DoesNotExist:
            return JsonResponse({"message": "Does not exist"})



@require_http_methods(["GET", "POST"])
def api_appointments(request):
    if request.method == "GET":
        appointments = Appointment.objects.all()
        return JsonResponse(
            {"appointments": appointments},
            encoder=AppointmentEncoder,
        )
    else:
        try:
            content = json.loads(request.body)
            technician_id = content["technician_id"]
            technician = Technician.objects.get(employee_id=technician_id)
            content["technician"] = technician
            del content["technician_id"]
            appointment = Appointment.objects.create(**content)

            return JsonResponse(
                appointment,
                encoder=AppointmentEncoder,
                safe=False,
            )
        except:
            response = JsonResponse(
                {"message": "Could not make appointment."}
            )
            response.status_code = 400
            return response


@require_http_methods(["DELETE"])
def api_appointment(request, pk):
    if request.method == "DELETE":
        try:
            appointment = Appointment.objects.get(id=pk)
            appointment.delete()
            return JsonResponse(
                encoder=AppointmentEncoder,
                safe=False,
            )
        except Appointment.DoesNotExist:
            return JsonResponse({"message": "Does not exist"})



@require_http_methods(["PUT"])
def api_cancel_appointment(request, pk):
    if request.method == "PUT":
        appointment = Appointment.objects.get(id=pk)
        appointment.cancel()
        body = {
            "customer": appointment.customer,
            "reason": appointment.reason,
            "date_time": appointment.date_time,
            "status": appointment.status,
        }
        return JsonResponse(
            body,
            encoder=AppointmentEncoder,
            safe=False,
        )


@require_http_methods(["PUT"])
def api_finish_appointment(request, pk):
    if request.method == "PUT":
        appointment = Appointment.objects.get(id=pk)
        appointment.finish()
        body = {
            "customer": appointment.customer,
            "reason": appointment.reason,
            "date_time": appointment.date_time,
            "status": appointment.status,
        }
        return JsonResponse(
            body,
            encoder=AppointmentEncoder,
            safe=False,
        )

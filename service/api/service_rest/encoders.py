from common.json import ModelEncoder
from .models import AutomobileVO, Technician, Appointment


class TechnicianEncoder(ModelEncoder):
    model = Technician
    properties = [
        "first_name",
        "last_name",
        "employee_id",
    ]


class AppointmentEncoder(ModelEncoder):
    model = Appointment
    properties = [
        "id",
        "vin",
        "vip",
        "date_time",
        "reason",
        "status",
        "customer",
        "technician",
    ]
    encoders = {
        "technician": TechnicianEncoder(),
    }


class AutomobileVOEncoder(ModelEncoder):
    model = AutomobileVO
    properties = [
        "vin",
        "sold",
        "import_href",
    ]

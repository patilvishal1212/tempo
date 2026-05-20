from django.contrib import admin
from .models import ContactForm
# Register your models here.


@admin.register(ContactForm)
class ContactFormAdmin(admin.ModelAdmin):
    list_display = ('name', 'email', 'phone_number')
    search_fields = ('name', 'email', 'phone_number')


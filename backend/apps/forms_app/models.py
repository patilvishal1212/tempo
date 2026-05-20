from django.db import models


class ContactForm(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    phone_number = models.CharField(max_length=15)
    address = models.TextField()
    message = models.TextField()

    def __str__(self):
        return self.name
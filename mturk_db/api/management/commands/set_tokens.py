from django.core.management.base import BaseCommand, CommandError
from django.contrib.auth.models import User
from rest_framework.authtoken.models import Token

class Command(BaseCommand):
    help = 'Closes the specified poll for voting'

    def add_arguments(self, parser):
        parser.add_argument('token_instance', help='Token of instance', type=str)
        parser.add_argument('token_worker', help='Token of worker', type=str)

    def handle(self, *args, **options):
        object_instance = User.objects.create_user('instance')
        object_worker = User.objects.create_user('worker')

        Token.objects.create(
            key=options['token_instance'],
            user_id=object_instance.id,
        )

        Token.objects.create(
            key=options['token_worker'],
            user_id=object_worker.id,
        )

        self.stdout.write(self.style.SUCCESS('Successfully set tokens'))

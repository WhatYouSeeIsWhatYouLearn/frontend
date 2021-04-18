from .base import *

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = '1jys*f2e0!x^ma@ayirw7b71-^r4q4(^5h32=d1*2hs&1+-7!m'

# SECURITY WARNING: define the correct hosts in production!
ALLOWED_HOSTS = ['*'] 

EMAIL_BACKEND = 'django.core.mail.backends.console.EmailBackend'


INSTALLED_APPS += [
        'debug_toolbar',
        ]
MIDDLEWARE.insert(2, 'debug_toolbar.middleware.DebugToolbarMiddleware')
INTERNAL_IPS = ['127.0.0.1',]


try:
    from .local import *
except ImportError:
    pass

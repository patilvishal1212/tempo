# Backend

## Overview

Django backend for the project. Provides API endpoints and data persistence.

## Prerequisites

- Python 3.10+ (3.11 recommended)
- pip
- (optional) virtual environment tool: `venv` or `virtualenv`

## Quickstart (Windows PowerShell)

1. Create and activate virtualenv

   ```powershell
   python -m venv .venv
   .\.venv\Scripts\Activate.ps1
   ```

2. Install dependencies

   ```powershell
   pip install -r requirements.txt
   ```

3. Configure environment variables

   - Create a `.env` file (example keys below):
     - `DJANGO_SECRET_KEY`
     - `DATABASE_URL` (if using external DB)

4. Apply migrations

   ```powershell
   python manage.py migrate
   ```

5. Create superuser (optional)

   ```powershell
   python manage.py createsuperuser
   ```

6. Run server

   ```powershell
   python manage.py runserver
   ```

## Running tests

```powershell
python manage.py test
```

## Directory structure

- `manage.py` — Django CLI
- `config/` — Django project settings & urls
- `apps/` — Django apps (e.g., `forms_app`)
- `requirements.txt` — pinned Python dependencies

## API & development notes

- Serializers are in `apps/*/serializers.py` and views in `apps/*/views.py`.
- Add new migrations with `python manage.py makemigrations forms_app`.
- Use Django admin to inspect models in development.

## Useful commands

- Install dependencies: `pip install -r requirements.txt`
- Run migrations: `python manage.py migrate`
- Run dev server: `python manage.py runserver`
- Run tests: `python manage.py test`

## Contact / Next steps

If you need help wiring the frontend to API endpoints, tell me which endpoint list you want included here.

<!-- postgresql://neondb_owner:npg_1UsuXmopNCa7@ep-frosty-morning-ao5aj5fv-pooler.c-2.ap-southeast-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require -->


import os
import requests
import pandas as pd
import msal
from dotenv import load_dotenv
from datetime import datetime, timedelta, timezone

load_dotenv('C:/Users/ALAA-ORANGE/Desktop/orangedata/dynamic/.env')
client_id = os.getenv('CLIENT_ID')
client_secret = os.getenv('CLIENT_SECRET')
tenant_id = os.getenv('TENANT_ID')
app = msal.ConfidentialClientApplication(
    client_id=client_id,
    client_credential=client_secret,
    authority=f'https://login.microsoftonline.com/{tenant_id}',
)
token = app.acquire_token_for_client(scopes=['https://orangepax.operations.eu.dynamics.com/.default'])['access_token']

headers = {'Authorization': f'Bearer {token}'}
url = f"https://orangepax.operations.eu.dynamics.com/data/RetailTransactions?$filter=TransactionNumber eq '1109-POS-1109-1-1777716253014'"
r = requests.get(url, headers=headers)
data = r.json()
if data.get('value'):
    print("TransactionDate of header:", data['value'][0].get('TransactionDate'))
else:
    print("Not found")

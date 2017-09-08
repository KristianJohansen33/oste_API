# OsteAPI Dokumentation 

## Resurser

**GET /cheeses**

Resursen repræsenterer alle oste i kartoteket
Resursen er formateret på føægende måde:

```jason
[{
    "varenr": number,
    "navn": string,
    "type": "string",
    "billede": "string",
    "antal": "number",
    "producent": "string",
    "land": "string",
    "smag": "string",
    "farve": "string",
    "Pris": "number"
},{
    ...
}]
```

**GET /cheeses/\<varenummer>**

Resursen repræsenterer en enkle oste i kartoteket
Resursen er formateret på føægende måde:

```jason
{
    "varenr": number,
    "navn": string,
    "type": "string",
    "billede": "string",
    "antal": "number",
    "producent": "string",
    "land": "string",
    "smag": "string",
    "farve": "string",
    "Pris": "number"
},{
    ...
}
```

**POST /login**

Resursen varetager log-ind information og returnerer et AccessToken.
Resursens request body er formateret på følgende mode:
```JSON{
    "username": string,
    "password": string
}
```

Resursens response er formateret på følgende måde:

```JSON
{
    "AccessToken": string
}
```

AccessToken er en 512 bit streng, genereret med randomBytes.
# ICTProject1_Bas_Dylan_Gert_Robin

## 9/5

website werking veranderd:

- in plaats van 25 dezefde pagina's te maken kan alles nu uit `data.json` gehaald. Data moet hieraan toegevoegd worden.

### Studiekaart

```
{
      "id": "",
      "name": "",
      "description": "",
      "features": [
        "",
        "",
        ""
      ],
      "color": "#",
      "colorName": "",
      "qr": ""
    },
```

bij id moet een getal tussen 0 en 24 inc. gezet worden dit verwijst naar het id in de url's en QR codes.

name is de naam van de bachelor

description is de beschrijving over de bachelor

features zijn de 3 kenmerken of vakgebieden

color en colorName zijn de hex waarde en naam van de kleur van de oplossing.

qr krijgt een qr code uit `/images/qr codes`, dit word nog niet toegepast ergens.

### stellingkaart

```
{
      "text": "",
      "studiekaart_id": ""
    },
```

text is de stelling die op de kaart staat

studiekaart_id is de id van de studiekaart waar deze bijhoord

### objectkaart

```
{
      "image": "",
      "description": "",
      "studiekaart_id": ""
    },
```

image is een foto of logo van het object/app, deze foto moet in de images folder staan met dezelfde naam

description is de beschrijving van het object/app

studiekaart_id is de id van de studiekaart waar deze bijhoord

nieuwe data mag aan deze json toegevoegd worden.

## 29/4

kleine aanpassingen gedaan:

- namen aangepast voor gemak
- background image in html file zelf gezet ipv css file, zodat per richting andere foto gebruikt kan worden

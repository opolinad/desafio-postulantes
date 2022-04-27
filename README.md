# Desafio Postulantes

## Uso de la API

Para ejecutar el proyecto se puede clonar el mismo y ejecutarlo desde un ambiente local. Para clonarlo puede acceder al botón verde que encuentra en la parte superior izquierda de la siguiente imagen:

![image](https://user-images.githubusercontent.com/92406653/165444546-a596bace-8110-4bf5-8a28-3d6694c44e61.png)

Una vez hace click en el botón puede copiar el enlace que se despliega (o puede descargar el archivo ZIP)

![image](https://user-images.githubusercontent.com/92406653/165444581-330404e1-5818-4146-8787-e6611b665af7.png)

Una vez se ha hecho el paso anterior, en su computador debe proceder al directorio donde quiere que se localice el proyecto y (1) si copió la dirección, debe abrir la terminal y escribir el comando ```git clone urlcopiada``` donde urlcopiada es lo que ha copiado (2) si descargó el zip, debe proceder a descomprimirlo (en la locación deseada).

Una vez el proyecto está en el directorio deseado, se deben ejecutar las dependencias necesarias, para ello puede abrir la terminal, asegurandose que esté en el directorio del proyecto, y escribir el comando ```npm install``` (si se hace uso de npm) o ```yarn install``` (si se hace uso de yarn).

Con el proyecto instalado solo falta levantar el servidor, para esto se debe ejecutar el siguiente comando en la terminal (se debe asegurar que se esté en el directorio del proyecto) ```npm start```. Al ejecutar el comando la terminal debe verse así:

![image](https://user-images.githubusercontent.com/92406653/165444821-395d9f47-5a02-4aea-9a01-68d2922e5b77.png)

Luego de esto se puede probar la API desde Postman (o un programa similar) o desde el navegador. Cualquiera sea la elección, la URL para hacer los pedidos es ```http://localhost:3000/api```. Esta api acepta dos Query parameters: ```page y resultsPerPage```

### page

Este parámetro debe ser un número entero y para que se muestre información, no debe ser mayor al entero más alto que resulta entre la división entre el número total de registros (156) y el parámetro ```resultsPerPage```. Con este parámetro se tiene la página de los resultados que se quiere consultar.

### resultsPerPage

Este parámetro debe ser un número entero. Con este parámetro se tiene el número de resultados por cada página que se quiere consultar.

## Descripción

Con el fin de seleccionar a nuestros 2 developers, tenemos el siguente desafio.

De la siguente URL [Link](https://www.sii.cl/servicios_online/1047-nomina_inst_financieras-1714.html) es necesario crear un código que sea capaz de parsear la pagina web y devolver un json con esta información.
![image](https://user-images.githubusercontent.com/3030497/164536276-9eb79d10-4fb0-4943-a15f-2536a8586330.png)

El JSON de respuesta puede venir en el formato que estimes conveniente.

## Preguntas Frecuentes

- Tipos de entrega, cualquiera de los siguiente sirve
  - API caso generico
  - API caso particular
  - Script para el caso particular
- Lenguaje: El que más te guste
- Plazo de Entrega: Indefinido, iremos entrevistando a los que van terminando primero.

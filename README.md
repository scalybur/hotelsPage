# hotelsPage
Autor: Nahuel Alejandro Cabrera
Proyecto: Vista de hoteles, construcción de un proyecto para Almundo.com

#HOW TO RUN THIS PROJECT#
- git clone
- cd hotelsPage
- npm install
- bower install
- gulp
__________
You need:
GULP
BOWER
__________

Bower dependences
- angularjs slider
- i18n Locale

__________

7-4-17

#Iniciando estructura del projecto
#Representación de la estructura
#Creacion de los ficheros correspondientes
#Pensar en componentes. ¿Como construirlos según sus usos en mi aplicación?
#Configurar rutas
#Hacer tareas en gulp
#Instalar Angular
#Comenzar a crear modulos
#Crear componentes
#Crear templates - jade
#Sass implementation
#Sass de raíz y llamado a sus derivaciones por componente
#Server de resultados
#Filtrado
#Header
#Footer
#Polish all components

#

_______________________

La aplicación en presentación es la vista de resultados de hoteles en Almundo.com, si bien no es igual es una estructura similar, el objetivo de esto: realizar una aplicación parecida a la original.
Contamos con componentes que se dividen por funcionalidad:

APP(folder)->

A_headerPrime(Header de la página)
COMPONENTE_JADE_SAS

___________________________
___________________________

B-resultH(Resultados de hoteles):

->Contiene->

1_breadcrumbComponent(Posicionamiento de página)
COMPONENTE_JADE_SASS

2_filterComponent(Filtros de resultados)
->Contiene->
COMPONENTE_MODULO_JADE_SASS
A_filterHeader(Título y eliminación de filtrado)
COMPONENTE_JADE_SASS
B_searchName(Filtrado por nombre)
COMPONENTE_JADE_SASS
C_searchPrice(Filtrado por precio en base a slider-range)
COMPONENTE_JADE_SASS
D_searchStars(Filtrado por estrellas)
COMPONENTE_JADE_SASS

3_headerInfo(Conjunción de los elementos seleccionados para buscar resultados)
COMPONENTE_JADE_SASS

4_mapsComponent(Ver los resultados en un mapa)
COMPONENTE_JADE_SASS

5_orderBy(Ordenar resultados por relevancia, estrellas, por noche o por habitación)
COMPONENTE_JADE_SASS


6_resultContainerItems(Contenedor de resultados de hoteles)
->Contiene->

1-COMPONENTE-INTERNO
_________

A_hotelItemCluster(Específicamente el resultado de hotel)
COMPONENTE_JADE
_________

COMPONENTE_JADE_SASS


7_A LA VEZ resultH CONTIENE SUS FICHEROS:
COMPONENTE_MODULO_SERVICIO_JADE_SASS


___________________________
___________________________

C_sliderComponent(Slider de imágenes, su uso radica en cada item de los resultados)
COMPONENTE_MODULO_JADE_SASS


__________________________

Dentro de app(folder) se encuentra el módulo principal(app.module.js)

Por fuera de app(folder) hay 4 carpetas más:

_fonts
_img
_sass
_vendor

Y un fichero:

index.html

Por fuera de client(folder) se encuentra otra carpeta:

_server:
_index.js
_hotel-result(folder):


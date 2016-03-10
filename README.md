#Eldorado

##What is it?
Eldorado displays the results of a research project detecting land cover change in the Sierra Nevada. The technique produces a binary map displaying areas of damage or perturbation. Another element present are the ground-truth points used to ensure the technique is statistically sound. Each point on the map represents a location I visited and collected data. The ground-truth procedures include photographs captured by a drone and more traditional techniques of species identification and transects.

Ground-truth points are used to develop an accuracy assessment. The results of this accuracy assessment along with spectral distributions will be displayed within the application.

This website was created to make my thesis research more visible. The technique was intentionally developed using free data and easy to execute techniques so that others may reproduce the results in other regions in need of land cover monitoring. It represents work originally conducted in Yosemite National Park as a graduate student at Towson University.

##Technologies:
* Ruby
* Rails
* PostgreSQL
* Javascript
* JQuery
* HTML5
* CSS3
* Bootstrap
* MapBox JS API
* GDAL
* Google Earth Engine JS API
* D3
* Heroku


##Authors:
* Karla King


##To run locally via the command line:

1. git clone https://github.com/f-ocal/skylark.git
2. cd eldorado
3. bundle install
4. rake db:create
5. rake db:migrate
6. rake db:seed
7. rails server
8. http://localhost:3000/


# angular-01 Android

Con angular podemos crear una apk de android, basada en web.

Vamos a necesitar Nodejs, TypeScript, Vscode, Capacitor, Sdk de Android Studio

Vamos a actualizarlo a Angular 14.0

*********************************************

 gh repo clone aratan/Angular-01Android
 cd  Angular-01Android
 npm i

Vamos a crear una nueva rama en git, por seguridad.
 git checkout -b migration-v11

https://update.angular.io/?v=10.0-11.0
 ng update @angular/core@11 @angular/cli@11 
 ng update @angular/material@11
 ng update
 ng update @angular/cli @angular/core
 
 * Probar *
 * ng serve
 * http://localhost:4200/
 
Angular 11 a 12
  git checkout -b migration-v12
  
  ng update @angular/core@12 @angular/cli@12
  ng update @angular/material@12
  ng update
  
 * Probar *
 * ng serve
 * http://localhost:4200/


Angular 12 a 13  
  git checkout -b migration-v13
  
  ng update
  ng update @angular/core@13 @angular/cli@13
  ng update @angular/material@13

 * Probar *
 * ng serve
 * http://localhost:4200/


Angular 13 a 14
  ng update @angular/core@14 @angular/cli@14
  ng update @angular/material@14
  ng update
  
 * Probar *
 * ng serve
 * http://localhost:4200/

*********************************************

¿ Qué version tiene mi aplicación ?, recordar que las actualizaciones se hace de 
a pasitos no puedes saltar de la 11 a la 14, tienes que pasar por las intermedias.

cat package.json --> nos da la version de angular   "@angular/cli": "^10.1.7"

 

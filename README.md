# cc-proiect

PREZENTAREA APLICATIEI
	Am creat o aplicație web care permite utilizatorilor să vadă care sunt cele mai populare filme în momentul de față și adauge într-un watchlist filmele pe care doresc sa le vadă în viitorul apropiat. Utilizatorii pot de asemenea sa caute ce film doresc să adauge în watchlist. 
	Filmele adăugate în watchlist sunt stocate într-o bază de date în Cloud, gestionată de Google Cloud Platform. Filmele sunt afișate în pagina cu ajutorul unei API de la TMDB(The Movie Database).
DESCRIERE API
API TMDB
	The Movie Database este o bază de date pentru filme și seriale TV și a fost înființata în anul 2008. În fiecare an numărul contribuțiilor la baza de date a crescut și peste 400000 de developers și companii utilizează această platformă. Pe lângă informațiile despre actori, filme, seriale TMDB oferă și o gamă largă de imagini, peste 1000 de imagini sunt adăugate în fiecare zi.
	Pentru a folosi API pentru filme al celor de la TMDB trebuie să ne facem un cont pe site-ul https://www.themoviedb.org/. 
![image](https://user-images.githubusercontent.com/72129828/168488507-ac7d19d6-4eba-4717-8404-6ea3a6bc6dde.png)
După crearea contului v-a trebui să intram în posesia unei chei pentru a putea utiliza API-ul. Aceasta cheie se găsește la setările contului -> API -> API KEY(v3 auth)
![image](https://user-images.githubusercontent.com/72129828/168488520-28c78693-c0e4-4ef8-bd87-cd2634315a50.png)
Pentru aplicația realizată de mine am utilizat API-ul pentru a-mi aduce în pagina cele mai populare filme și pentru a-mi aduce în pagina unele filme în funcție de o căutare.
![image](https://user-images.githubusercontent.com/72129828/168488536-a9773a3c-954d-4e3f-8039-8afef474d3c0.png)
https://api.themoviedb.org/3/search/movie?api_key=<<api_key>>&language=en-US&page=1&include_adult=false 
https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US
GOOGLE CLOUD PLATFORM - SQL
	Pentru baza de date am utilizat GOOGLE CLOUD PLATFORM – SQL. Serviciul SQL este un serviciu de baze de date complet gestionat pentru MySQL, PostgreSQL și SQL Server. 
Avantaje Cloud SQL:
•	Costuri mai mici de întreținere;
•	Asigură continuitatea afacerii;
•	Asigură securitatea și comformitatea;
•	Este ușor de configurat;
•	Integrare ușoare;
•	Sarcinile sunt automate.
Pentru aceasta aplicația am utilizat MySQL, am creat o instanța.   
 ![image](https://user-images.githubusercontent.com/72129828/168488561-a3fbdf21-1af6-42c6-8275-402066739251.png)

Baza de date consta dintr-un singur tabel în care sunt salvate filmele pe care utilizatorul dorește să le adauge în watchlist.
 ![image](https://user-images.githubusercontent.com/72129828/168488564-af6db7f0-17ea-473f-b9ef-0c2422426350.png)
![image](https://user-images.githubusercontent.com/72129828/168488570-a5f49101-ae33-4414-8ef0-0114498c7734.png)

 
FLUX DE DATE
Căutarea unui film
Pentru a căuta un film utilizatorul va trebui să introducă numele filmului în bara de căutare. 
De exemplu filmul Jack Reacher. Se va face un request https://api.themoviedb.org/3/search/movie?api_key={api_key}&query=Jack+Reacher și răspunsul v-a fi un json:

![image](https://user-images.githubusercontent.com/72129828/168488576-f9da5b7f-ab39-4fa0-b9aa-5734e2b97f6b.png)
BACKEND
EXEMPLE DE RESPONSE/REQUEST HTTP
Pentru partea de backend am folosit NODE,js. Am creat un server pentru a salva, a afișa și șterge din baza de date. 
HTTP GET Method

![image](https://user-images.githubusercontent.com/72129828/168488585-4b1e2006-9531-48ab-8667-9d94587d890f.png)
![image](https://user-images.githubusercontent.com/72129828/168488595-80ed8807-6841-47b8-a649-3c86cab3bef5.png)
HTTP POST Method
![image](https://user-images.githubusercontent.com/72129828/168488602-0a1b0ba1-06ec-4ab2-8076-895d354f1bc2.png)
![image](https://user-images.githubusercontent.com/72129828/168488606-4962bcef-cdfe-4feb-9d46-f3fc6c996991.png)
HTTP DELETE Method
![image](https://user-images.githubusercontent.com/72129828/168488614-462f9c7c-a687-44f8-bab0-d06a37b6e9c2.png)
![image](https://user-images.githubusercontent.com/72129828/168488625-1f13a806-5bca-4854-a074-d6b2c8a1a21b.png)
FRONTEND
REACT COMPONENTS
Pentru partea de frontend am utilizat React.
![image](https://user-images.githubusercontent.com/72129828/168488643-7ffa73ab-2ca4-46cc-8571-2efae6b31019.png)

Avem 3 componente principale Movies,js, Search.js și WatchList.js. Acestea sunt cele 3 pagini ale aplicației. Pe lângă acestea avem un header Hearder.js și alte 2 componente MovieDetails.js și MovieResult.js pentru filmele căutate și filmele din watchlist.
![image](https://user-images.githubusercontent.com/72129828/168488663-2ad8fd40-d7a8-47f6-8c40-27530a6770f3.png)
![image](https://user-images.githubusercontent.com/72129828/168488666-27e85807-9b6a-4d86-a677-e632883af396.png)
![image](https://user-images.githubusercontent.com/72129828/168488670-3a924167-a5dd-42de-bd10-50f5a5cda1a1.png)
REFERINTE

	Github backend: https://github.com/DraghiaCosmina/cc-proiectBackEnd 
	Github frontend: https://github.com/DraghiaCosmina/cc-proiect 
	Video prezentare proiect: https://www.youtube.com/watch?v=y8dbfwrihhk 
	Link deploy backend: https://mighty-springs-50951.herokuapp.com/movies (nu s-a reușit deploy-ul pentru frontend, se pot vizualiza înregistrarile existente în baza de date la acest URL)
	Link deploy frontend: https://murmuring-gorge-78410.herokuapp.com/ (nu funcționează) 


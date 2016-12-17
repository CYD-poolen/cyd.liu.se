WeaterMagic static page
===================

Installation
------------

``` bash
$ git clone git@github.com:WeatherMagic/static

$ gem install jekyll

$ cd cyd.liu.se

$ jekyll build --watch
```

Nu befinner sig en kompilerad version av hemsidan i _site-mappen. Följande nginx-conf levererar hemsidan:

```nginx
server{
	server_name  cyd.liu.se;
	root         /srv/cyd.liu.se/;
	access_log   /var/log/nginx/cyd.liu.se/access.log;
	error_log    /var/log/nginx/cyd.liu.se/error.log;
}
```

Utveckling
---------
Utifall du inte vill köra en hel nginx-installation på din utvecklingsmaskin kan man leverera hemsidan med följande ruby-server:

```bash
$ jekyll serve
```

Filstruktur
-----------

Filstrukturen är som följer:

```
./            - Alla filer i roten på Jekyllmappen som slutar med .md och börjar
 │              med ett YAML frontmatter kommer att hanteras av Jekyll och göras
 │              till sidor på hemsidan.
 ├─ fonts     - Innehåller alla fonter som används på sidan, kopieras rakt av.
 ├─ _layouts  - De olika layouter som används på hemsidan, specificeras i YAML-
 │              headern på markdown- eller HTML-filer.
 ├─ js        - Innehåller de JavaScript-filer som används på sidan, kopieras bara.
 ├─ _includes - Denna mapp innehåller de filer som kan inkluderas med {% include %}-
 │              kommandot.
 ├─ css       - CSS och huvud-SCSS/Sass-filer.
 ├─ _plugins  - Jekyll-plugin, om några sådana används. Det gör det inte i denna
 │              installation.
 ├─ img       - Bilder som används på sidan, kopieras rakt av.
 └─ _site     - Denna mapp töms var gång sidan kompileras. Det är i denna mapp de
                kompilerade filerna placeras, här finns det altså enbart HTML, CSS
				och JavaScript. Det är innehållet i denna mapp som levereras till
				användarna via webbservern.
 ```

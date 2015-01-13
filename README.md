angular-juni-seed_1
===================
juni의 첫번째 angularjs 탬플릿
$route가 적용되어 있는 버전임 


프로젝트 로컬에 설치하는 방법
--------------------



1. 먼저 node.js가 설치되어 있어야함
2. bower가 설치되어야함  (> npm install -g bower )
3. grunt가 설치되어야 함 (> npm install -g grunt-cli )

----

4. 현재 폴더를 다운로드 받는다
5. com창을 열고 해당 디렉토리로 이동한다
6. npm install ---- 실행 ( npm package.json의 패키지를 자동 설치함) --> node_modules 폴더가 자동 생성됨
7. bower install ---- 실행 (bower.json에 기록된 패키지를 자동 설치함) --> bower_components 폴더가 자동 생성됨
8. grunt ----실행 (Gruntfile.js를 실행하여 빌드버전인 dist를 생성함) --> .tmp, dist 폴더가 자동 생성됨

GRUNT 명령어 참조   
- grunt server       ( 웹서버 실행 후 보기 실행 )  
- grunt server:dist  ( 웹서버 실행 후 dist에 있는 파일 실행 )  
   
- grunt              (테스트 후 빌드 - 웹서버는 뜨지 않음 ) 
- grunt test         ( test 실행 - 웹서버는 뜨지 않음 )  
- grunt build        ( 빌드 생성 - 웹서버는 뜨지 않음 )  

** CMD창에서 돌고 있는 웹서버 종료는 ctrl + c 로 watch 종료함 **



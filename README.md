

# 리액트 프로젝트 시작하기

1. node.js 설치 (LTS 버전으로)
2. create-react-app 설치(최초 1번만 진행하면됨, 이후 어디든 3번부터 바로 시작하면됨)
```
$ npm install -g create-react-app

```
3. react 프로젝트 생성
```
$ npx create-react-app 프로젝트 이름
```

4. react 프로젝트 실행(react 서버 가동)
```
$ cd 프로젝트 폴더로 이동 후
$ npm start
```


# git clone 시 주의사항
임의로 파일을 만들고 클론하고 cmd에서 npm start 하면 실행이 안된다.
이그노어에 /node_modules가 추가 되어있다. 이게 없기 때문에 실행이 안된다는 것이다.
그래서 npm start가 아니라, npm install 이라고 먼저 해줘야 한다.
그럼 파일 내부에는 node_modules가 생길 것이고, npm start라고 해줘야 서버가 가동된다.



실행을 해보면,
http://localhost:3000 에서 프론트엔드 서버실행된다.


5. 추가 라이브러리(react-todo-app에서 사용할 라이브러리를 다운 받을 것.)
```
$ npm install react-icons  // 아이콘
$ npm install classnames   // 클래스 add/remove 편리한거
$ npm install sass // scss 문법 사용
$ npm install reactstrap bootstrap
$ npm install @mui/material @emotion/react @emotion/styled
$ npm install @mui/icons-material
$ npm install react-router-dom
```
# 📚 포켓몬 도감 웹사이트

React로 구현한 포켓몬 도감 프로젝트입니다.

[📌사이트 바로가기](https://pokemon-dex-murex.vercel.app/)

<img width="1436" alt="스크린샷 2025-02-10 14 05 08" src="https://github.com/user-attachments/assets/b9a75b44-01e5-4b24-a486-9fe81499e1f1" />


## ⚒️ 주요 기능
- 포켓몬 리스트 출력
- 나만의 포켓몬 선택 & 삭제 기능
- 포켓몬 상세정보 확인
- 반응형 UI

## 📁 컴포넌트 구조

```
├─ src
│  ├─ App.jsx
│  ├─ assets
│  │  ├─ images  // 이미지 폴더
│  │  │  ├─ Poke_Ball.webp
│  │  │  └─ logo.png
│  │  └─ mockData.js  // 포켓몬 목데이터
│  ├─ components
│  │  ├─ Dashboard
│  │  │  ├─ Dashboard.jsx  // 대시보드
│  │  │  ├─ Dashboard.style.jsx
│  │  │  ├─ MyPokeBall.jsx  // 포켓볼 출력 컴포넌트
│  │  │  └─ MyPokeBall.style.jsx
│  │  ├─ PokemonDetail
│  │  │  ├─ PokemonDetail.jsx  // 포켓몬 상세정보 컴포넌트
│  │  │  └─ PokemonDetail.style.jsx
│  │  ├─ PokemonList
│  │  │  ├─ PokemonList.jsx  // 포켓몬 리스트 출력
│  │  │  └─ PokemonList.style.jsx
│  │  └─ common
│  │     ├─ Button
│  │     │  ├─ Button.jsx  // 버튼 컴포넌트
│  │     │  └─ Button.style.jsx
│  │     └─ Card
│  │        ├─ PokemonCard.jsx  // 포켓몬 카드 출력 컴포넌트
│  │        └─ PokemonCard.style.jsx
│  ├─ main.jsx
│  ├─ pages
│  │  ├─ Detail.jsx  // 포켓몬 상세정보 페이지
│  │  ├─ Dex.jsx  // 포켓몬 도감 페이지
│  │  ├─ Home.jsx  // 홈 페이지
│  │  └─ Home.style.jsx
│  ├─ redux  // RTK 활용
│  │  ├─ config
│  │  │  └─ configStore.js
│  │  └─ slices
│  │     └─ pokemon.js
│  └─ shared  // React Router
│     └─ Router.jsx
```

## 📝 사이트 이용법

**1. 메인 홈**

- 사이트 진입 시 메인 홈화면이 뜨게 됩니다.
- `포켓몬 도감 시작하기` 버튼을 누르면 포켓몬 도감 페이지로 이동합니다.
     
<img width="1470" alt="스크린샷 2025-02-10 14 16 16" src="https://github.com/user-attachments/assets/ababd687-6d71-44bc-8414-4f67d8c322e0" />

<hr>

**2. 포켓몬 도감 페이지**

- 포켓몬 카드에 있는 `추가` 버튼을 누르면 상단 대시보드에 내가 선택한 포켓몬을 등록할 수 있습니다.
- 포켓몬은 최대 6개까지 등록이 가능합니다.
- `삭제` 버튼을 누르면 대시보드에 있는 포켓몬이 삭제됩니다.
- 포켓몬 카드를 클릭하면 상세 페이지로 이동합니다.
     
<img width="1383" alt="image" src="https://github.com/user-attachments/assets/02c048ad-4762-48a1-922b-b1e6dbd700f2" />

<hr>

**3. 포켓몬 상세 페이지**

- 포켓몬의 상세 정보를 확인할 수 있습니다.
- 상세 페이지에서도 포켓몬 추가, 삭제 기능이 가능합니다.
- `뒤로 가기` 버튼을 클릭하면 포켓몬 도감 페이지로 이동합니다.

<img width="1461" alt="image" src="https://github.com/user-attachments/assets/f1fd8d23-f6d5-4b32-bbb3-079858d2fed5" />

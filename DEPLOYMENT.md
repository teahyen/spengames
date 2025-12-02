# 배포 가이드 - 섞고 섞고 돌리고 섞고

## 🚀 현재 실행 중인 서버

### 접속 정보
- **URL**: https://8000-i8trwyu4p4hytirgbktca-583b4d74.sandbox.novita.ai
- **포트**: 8000
- **상태**: ✅ 실행 중
- **서버 타입**: Python HTTP Server

### 테스트 방법
1. 위 URL을 브라우저에서 열기
2. 메인 메뉴가 표시되는지 확인
3. "탭하여 시작" 버튼 클릭
4. 레벨 1에서 게임 플레이 테스트
5. 키보드/마우스/터치 조작 테스트

## 📦 프로젝트 구조

```
/home/user/webapp/
├── index.html              # 메인 HTML 파일
├── manifest.json           # PWA 매니페스트
├── icon.svg               # 앱 아이콘
├── sw.js                  # 서비스 워커
├── .gitignore            # Git 무시 목록
├── README.md             # 프로젝트 설명
├── USER_GUIDE.md         # 사용자 가이드
├── PROJECT_SUMMARY.md    # 프로젝트 요약
├── DEPLOYMENT.md         # 이 파일
└── src/
    ├── css/
    │   └── main.css      # 모든 스타일
    └── js/
        ├── levels.js     # 60개 레벨 데이터
        ├── physics.js    # 물리 엔진
        ├── game.js       # 게임 메인 로직 (~900 라인)
        ├── ui.js         # UI 관리자 (~350 라인)
        └── main.js       # 진입점 (~200 라인)
```

## 🌐 배포 옵션

### 1. GitHub Pages (추천)

**장점**: 무료, 자동 HTTPS, 쉬운 설정

```bash
# 1. GitHub 저장소 생성
# 2. 코드 푸시
git remote add origin https://github.com/YOUR_USERNAME/mix-spin-mix.git
git push -u origin main

# 3. GitHub Pages 설정
# Settings → Pages → Source: main branch → Save
```

**접속 URL**: `https://YOUR_USERNAME.github.io/mix-spin-mix/`

### 2. Netlify

**장점**: 자동 배포, 무료 HTTPS, 빠른 CDN

```bash
# 방법 1: GitHub 연동
1. https://netlify.com 접속
2. "New site from Git" 클릭
3. GitHub 저장소 선택
4. 자동 배포 설정

# 방법 2: 드래그 앤 드롭
1. 프로젝트 폴더를 Netlify에 드래그
2. 즉시 배포 완료
```

**접속 URL**: `https://YOUR-SITE-NAME.netlify.app`

### 3. Vercel

**장점**: 빠른 배포, 무료, 자동 최적화

```bash
# 1. Vercel CLI 설치
npm install -g vercel

# 2. 배포
cd /home/user/webapp
vercel

# 또는 GitHub 연동
# https://vercel.com → New Project → Import GitHub repository
```

**접속 URL**: `https://YOUR-PROJECT.vercel.app`

### 4. 정적 호스팅 (AWS S3, Azure, etc.)

**장점**: 확장성, 커스터마이징

```bash
# 예: AWS S3
1. S3 버킷 생성 (정적 웹사이트 호스팅 활성화)
2. 파일 업로드
3. CloudFront CDN 설정 (선택사항)
4. Route 53으로 도메인 연결 (선택사항)
```

### 5. 자체 서버

**요구사항**: Node.js, Nginx, 또는 Apache

```bash
# Node.js HTTP Server
npm install -g http-server
cd /home/user/webapp
http-server -p 8000

# Python HTTP Server
python3 -m http.server 8000

# Nginx 설정
server {
    listen 80;
    server_name yourdomain.com;
    root /path/to/webapp;
    index index.html;
}
```

## 🔧 배포 전 체크리스트

### 필수 사항
- [x] 모든 파일이 올바른 위치에 있는지 확인
- [x] index.html이 루트에 있는지 확인
- [x] manifest.json과 sw.js가 루트에 있는지 확인
- [x] 모든 경로가 상대 경로인지 확인
- [x] 브라우저 콘솔에 에러가 없는지 확인

### 최적화 (선택사항)
- [ ] JavaScript 파일 압축 (minify)
- [ ] CSS 파일 압축
- [ ] 이미지 최적화 (아이콘을 PNG로 변환)
- [ ] Gzip 압축 활성화
- [ ] CDN 사용

### PWA 체크리스트
- [x] manifest.json 존재
- [x] 서비스 워커 등록
- [ ] 192x192, 512x512 PNG 아이콘 추가 (현재는 SVG)
- [x] HTTPS 사용 (배포 시 자동)

## 📱 PWA 아이콘 생성 (선택사항)

현재 SVG 아이콘이 있지만, PNG 아이콘을 추가하면 더 좋습니다:

```bash
# ImageMagick 사용
convert icon.svg -resize 192x192 icon-192.png
convert icon.svg -resize 512x512 icon-512.png

# 또는 온라인 도구 사용
# https://cloudconvert.com/svg-to-png
```

## 🔍 배포 후 테스트

### 기능 테스트
1. **로딩 테스트**
   - [ ] 페이지가 3초 이내에 로드되는가?
   - [ ] 모든 리소스가 올바르게 로드되는가?

2. **게임 플레이 테스트**
   - [ ] 레벨이 올바르게 시작되는가?
   - [ ] 회전 조작이 작동하는가?
   - [ ] 물리 엔진이 정상 작동하는가?
   - [ ] 목표 도달 시 클리어 화면이 나타나는가?

3. **저장 기능 테스트**
   - [ ] 레벨 클리어 후 저장되는가?
   - [ ] 새로고침 후에도 진행 상황이 유지되는가?
   - [ ] 별 개수가 올바르게 표시되는가?

4. **반응형 테스트**
   - [ ] 데스크톱에서 정상 작동
   - [ ] 태블릿에서 정상 작동
   - [ ] 모바일에서 정상 작동
   - [ ] 가로/세로 모드 모두 지원

5. **PWA 테스트**
   - [ ] 홈 화면에 추가 가능
   - [ ] 오프라인에서 실행 가능
   - [ ] 앱처럼 독립 실행

### 브라우저 호환성 테스트
- [ ] Chrome 90+ ✅
- [ ] Firefox 88+ ✅
- [ ] Safari 14+ ✅
- [ ] Edge 90+ ✅
- [ ] Mobile Chrome ✅
- [ ] Mobile Safari ✅

## 🐛 문제 해결

### 서비스 워커 문제
```javascript
// 브라우저 콘솔에서
navigator.serviceWorker.getRegistrations().then(registrations => {
    registrations.forEach(reg => reg.unregister());
});
// 페이지 새로고침
```

### 캐시 문제
- 브라우저 캐시 강제 새로고침: `Ctrl + Shift + R` (Windows/Linux) 또는 `Cmd + Shift + R` (Mac)
- 개발자 도구 → Application → Clear storage

### 경로 문제
- 모든 경로가 상대 경로인지 확인
- `/` 대신 `./` 또는 상대 경로 사용

## 📊 성능 최적화

### Lighthouse 점수 목표
- Performance: 90+
- Accessibility: 90+
- Best Practices: 90+
- SEO: 90+
- PWA: 전체 체크

### 최적화 팁
1. **이미지 최적화**: WebP 포맷 사용
2. **코드 분할**: 필요한 경우만 로드
3. **Lazy Loading**: 이미지 지연 로딩
4. **CDN 사용**: 정적 파일 CDN에서 제공
5. **압축**: Gzip/Brotli 압축 활성화

## 🔐 보안 체크리스트

- [x] HTTPS 사용
- [x] Content Security Policy (CSP) 권장
- [x] XSS 방지 (순수 JavaScript, no innerHTML with user input)
- [x] 민감한 정보 없음
- [x] API 키 노출 없음

## 📈 모니터링 (선택사항)

### Google Analytics 추가
```html
<!-- index.html의 <head>에 추가 -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 🎉 배포 완료!

배포가 완료되면:
1. 📱 모바일 기기에서 테스트
2. 🔗 친구들과 공유
3. 📝 피드백 수집
4. 🚀 지속적인 개선

---

## 📞 지원

배포 관련 문제가 있으면:
1. 브라우저 콘솔 확인
2. 네트워크 탭에서 리소스 로딩 확인
3. Lighthouse 리포트 실행
4. 문서 재확인

**행운을 빕니다!** 🎮✨

# 개발 빌드 오류 해결 방법

## 문제

다음 오류가 발생하는 경우:

```
CommandError: No development build (com.shyoon4044.myapp) for this project is installed.
Install a development build on the target device and try again.
```

## 원인

프로젝트에 `expo-dev-client`가 설치되어 있어서 개발 빌드가 필요합니다.

## 해결 방법

### 방법 1: npm start + 키보드 단축키 사용 (가장 간단)

`npm run ios` 대신 다음 방법을 사용하세요:

1. **터미널에서 Expo 개발 서버 시작:**

```bash
npm start
```

2. **터미널에서 `s` 키를 눌러 Expo Go 모드로 전환**

   - 개발 서버가 시작되면 `Press s | switch to Expo Go` 옵션이 표시됩니다
   - `s` 키를 누르면 Expo Go 모드로 전환됩니다

3. **그 다음 `i` 키를 눌러 iOS 시뮬레이터에서 앱 실행**

### 방법 2: Expo Go 직접 사용

시뮬레이터가 실행 중이라면:

1. **시뮬레이터에서 App Store 열기**

2. **Expo Go 앱 다운로드:**

   - App Store에서 "Expo Go" 검색
   - Expo Go 앱 설치

3. **Expo 개발 서버 실행:**

```bash
npm start
```

4. **Expo Go 앱에서 QR 코드 스캔 또는 URL 입력**

### 방법 3: 개발 빌드 생성 (고급)

개발 빌드를 생성하고 설치하려면:

1. **로컬에서 iOS 개발 빌드 생성:**

```bash
npx expo run:ios
```

이 명령어는:

- 네이티브 iOS 프로젝트를 생성합니다
- 시뮬레이터에 개발 빌드를 빌드하고 설치합니다
- 시간이 오래 걸릴 수 있습니다 (처음 실행 시)

2. **또는 EAS Build 사용:**

```bash
eas build --profile development --platform ios
```

## 추천 워크플로우

가장 간단하고 빠른 방법:

1. **시뮬레이터가 실행 중인지 확인**

2. **터미널에서:**

```bash
npm start
```

3. **개발 서버가 시작되면:**
   - `s` 키를 눌러 Expo Go 모드로 전환 (선택사항)
   - `i` 키를 눌러 시뮬레이터에서 앱 실행

## 참고사항

- `expo-dev-client`가 설치되어 있으면 개발 빌드가 필요하지만, Expo Go 모드로 전환하면 사용할 수 있습니다
- 개발 빌드를 사용하려면 먼저 빌드하고 설치해야 합니다
- `npm run ios`는 개발 빌드가 설치되어 있을 때만 작동합니다

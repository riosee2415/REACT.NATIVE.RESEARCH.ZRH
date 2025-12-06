# Expo iOS 시뮬레이터 연결 문제 해결

## 문제

시뮬레이터는 실행되어 있지만, `npm run ios` 또는 Expo에서 iOS를 열 때 다음 오류 발생:

```
CommandError: Simulator is installed but is identified as 'a.simulator'; don't know what that is.
```

## 해결 방법

### 방법 1: Expo 개발 서버 + 키보드 단축키 사용 (가장 권장)

`npm run ios` 명령어 대신 다음 방법을 사용하세요:

1. **터미널에서 Expo 개발 서버 시작:**

```bash
npm start
```

2. **시뮬레이터가 이미 실행 중이라면, 터미널에서 `i` 키를 누르세요**

이 방법은 `npm run ios`보다 안정적이고, 이미 실행 중인 시뮬레이터와도 잘 작동합니다.

### 방법 2: Expo Go 앱 사용

시뮬레이터가 실행 중이라면:

1. **시뮬레이터에서 App Store 열기**

2. **Expo Go 앱 다운로드:**

   - App Store에서 "Expo Go" 검색
   - Expo Go 앱 설치

3. **Expo 개발 서버 실행:**

```bash
npm start
```

4. **Expo Go 앱에서 QR 코드 스캔 또는 URL 입력:**
   - 터미널에 표시된 QR 코드를 Expo Go로 스캔
   - 또는 Expo Go 앱에서 "Enter URL manually" 선택 후 `exp://` 주소 입력

### 방법 3: 개발 빌드 사용

프로젝트에 `expo-dev-client`가 설치되어 있다면:

1. **시뮬레이터가 실행 중인 상태에서:**

```bash
npm start
```

2. **터미널에서 `i` 키를 눌러 개발 빌드 실행**

### 방법 4: 수동으로 URL 열기

시뮬레이터가 실행 중이고 Expo 개발 서버도 실행 중이라면:

1. **터미널에서 Expo 개발 서버 URL 확인:**

   - 예: `exp://192.168.0.33:8081` 또는 `expo-development-client://expo-development-client/?url=http%3A%2F%2F192.168.0.33%3A8081`

2. **시뮬레이터에서 Safari 열기**

3. **URL 입력하여 열기**

## 왜 `npm run ios`가 작동하지 않나요?

`npm run ios` 명령어는 Expo가 시뮬레이터를 자동으로 감지하고 열려고 시도하는데, 때때로 시뮬레이터 식별자를 잘못 읽어서 `'a.simulator'` 같은 오류가 발생할 수 있습니다.

## 추천 워크플로우

1. **Xcode에서 시뮬레이터 먼저 실행:**

   - `Xcode` → `Open Developer Tool` → `Simulator`
   - 원하는 기기 선택 (예: iPhone 15 Pro)

2. **새 터미널에서 Expo 개발 서버 실행:**

```bash
cd ~/Documents/RESEARCH/REACT.NATIVE/my-app
npm start
```

3. **터미널에서 `i` 키를 눌러 시뮬레이터에서 앱 실행**

이 방법이 가장 안정적입니다!

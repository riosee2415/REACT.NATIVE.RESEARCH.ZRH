# iOS 시뮬레이터 설정 가이드

## 문제 해결

Xcode가 설치되어 있지만 `npm run ios` 실행 시 오류가 발생하는 경우, 다음 명령어를 실행하세요:

```bash
sudo xcode-select -s /Applications/Xcode.app/Contents/Developer
```

이 명령어는 관리자 권한이 필요하므로 비밀번호를 입력하라는 메시지가 나타날 수 있습니다.

## 설정 확인

설정이 올바르게 되었는지 확인하려면:

```bash
xcode-select -p
```

출력이 다음과 같이 나와야 합니다:

```
/Applications/Xcode.app/Contents/Developer
```

## Xcode 라이선스 동의

처음 Xcode를 사용하는 경우, 라이선스에 동의해야 할 수도 있습니다:

```bash
sudo xcodebuild -license accept
```

## iOS 시뮬레이터 실행

### 방법 1: Expo 개발 서버에서 키보드 단축키 사용 (권장)

1. 먼저 Expo 개발 서버를 실행합니다:

```bash
npm start
```

2. 터미널에서 **`i`** 키를 누르면 iOS 시뮬레이터가 자동으로 열립니다.

이 방법이 가장 안정적입니다.

### 방법 2: 직접 iOS 시뮬레이터 실행

만약 `npm run ios` 실행 시 `'a.simulator'` 오류가 발생한다면:

1. **Xcode에서 시뮬레이터를 먼저 열기:**

   - Xcode 실행
   - 메뉴에서 `Xcode` → `Open Developer Tool` → `Simulator` 선택
   - 또는 Spotlight(Cmd + Space)에서 "Simulator" 검색

2. **시뮬레이터가 열린 후, Expo 개발 서버 실행:**

```bash
npm start
```

3. 시뮬레이터에서 Expo Go 앱을 열거나, 개발 빌드를 실행합니다.

### 방법 3: 특정 시뮬레이터 지정

시뮬레이터 목록을 확인하고 특정 시뮬레이터를 지정할 수 있습니다:

```bash
xcrun simctl list devices available
```

그 다음 특정 시뮬레이터를 지정:

```bash
npx expo start --ios --simulator "iPhone 15 Pro"
```

## 문제 해결

### 'a.simulator' 오류가 발생하는 경우

1. **Xcode에서 시뮬레이터를 먼저 한 번 열어보세요:**

   - Xcode → Open Developer Tool → Simulator

2. **시뮬레이터가 정상적으로 열리는지 확인하세요**

3. **그 다음 `npm start`로 개발 서버를 실행하고, `i` 키를 눌러 시뮬레이터를 엽니다**

### CoreSimulatorService 오류가 발생하는 경우

다음 명령어로 시뮬레이터 서비스를 재시작:

```bash
sudo killall -9 com.apple.CoreSimulator.CoreSimulatorService
```

그 다음 Xcode에서 시뮬레이터를 다시 열어보세요.

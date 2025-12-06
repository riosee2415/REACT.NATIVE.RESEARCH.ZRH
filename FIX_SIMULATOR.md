# iOS 시뮬레이터 문제 해결 가이드

## 현재 문제

### 문제 1: `'a.simulator'` 오류

Expo가 시뮬레이터를 제대로 인식하지 못할 때 발생합니다.

### 문제 2: Xcode Simulators 목록이 비어있음 ⚠️

Xcode → Simulators 메뉴에서 목록이 하나도 나오지 않는 경우, **iOS 시뮬레이터 런타임이 설치되지 않은 상태**입니다.

**먼저 시뮬레이터 런타임을 설치해야 합니다!** (아래 "시뮬레이터 런타임 설치" 섹션 참조)

## 해결 방법

### 방법 1: Xcode에서 시뮬레이터 먼저 열기 (가장 권장)

1. **Xcode 실행**
2. **메뉴에서 시뮬레이터 열기:**
   - `Xcode` → `Open Developer Tool` → `Simulator`
   - 또는 Spotlight(Cmd + Space)에서 "Simulator" 검색
3. **시뮬레이터가 열리면, 새로운 터미널 창에서:**

```bash
cd ~/Documents/RESEARCH/REACT.NATIVE/my-app
npm start
```

4. **Expo 개발 서버가 실행되면 터미널에서 `i` 키를 누르세요**

### 방법 2: CoreSimulatorService 재시작

만약 시뮬레이터 서비스에 문제가 있다면:

```bash
# 시뮬레이터 서비스 재시작
sudo killall -9 com.apple.CoreSimulator.CoreSimulatorService

# Xcode 재시작 (선택사항)
killall Xcode

# Xcode 다시 실행 후 시뮬레이터 열기
open -a Xcode
```

### 방법 3: Xcode에서 직접 시뮬레이터 선택

1. Xcode 실행
2. 상단 메뉴에서 `Window` → `Devices and Simulators` 선택
3. `Simulators` 탭에서 원하는 기기를 선택
4. `Boot` 버튼을 클릭하여 시뮬레이터 시작

### 방법 4: Expo 개발 서버 실행 후 키보드 단축키 사용

터미널에서:

```bash
npm start
```

그 다음 터미널에서:

- `i` 키: iOS 시뮬레이터 열기
- `a` 키: Android 에뮬레이터 열기
- `w` 키: 웹 브라우저에서 열기

## 시뮬레이터 런타임 설치 (목록이 비어있는 경우)

Xcode의 Simulators 목록이 비어있다면, iOS 시뮬레이터 런타임을 먼저 설치해야 합니다.

### 설치 방법

1. **Xcode 실행**

2. **Xcode Settings 열기:**

   - `Xcode` → `Settings` (단축키: `Cmd + ,`)
   - 구버전 Xcode는 `Preferences` 메뉴

3. **Platforms 탭 선택:**

   - 설정 창 상단의 `Platforms` 탭 클릭
   - 또는 `Components` 탭 (구버전)

4. **iOS 런타임 다운로드:**

   - `iOS` 섹션에서 다운로드 가능한 런타임 찾기
   - 다운로드 아이콘(↓) 또는 `Download` 버튼 클릭
   - 설치가 완료될 때까지 대기 (인터넷 속도에 따라 시간 소요, 몇 GB 크기)

5. **설치 확인:**
   - `Window` → `Devices and Simulators` → `Simulators` 탭
   - 시뮬레이터 목록이 나타나는지 확인

**자세한 내용은 `INSTALL_SIMULATOR.md` 파일을 참조하세요.**

## 주의사항

- **시뮬레이터 런타임이 설치되어 있어야** 다음 단계들을 진행할 수 있습니다
- Xcode에서 시뮬레이터를 한 번 이상 직접 열어본 적이 있어야 합니다
- 시뮬레이터가 이미 실행 중이어도 괜찮습니다
- `npm run ios` 대신 `npm start` 후 `i` 키를 사용하는 것이 더 안정적입니다

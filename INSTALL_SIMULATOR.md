# iOS 시뮬레이터 런타임 설치 가이드

## 문제

Xcode의 Simulators 목록이 비어있어서 시뮬레이터를 사용할 수 없는 경우, iOS 시뮬레이터 런타임을 설치해야 합니다.

## 해결 방법

### 방법 1: Xcode에서 직접 설치 (권장)

1. **Xcode 실행**

2. **Xcode 메뉴에서 Settings(설정) 열기:**

   - `Xcode` → `Settings` (또는 `Preferences` - 구버전)
   - 단축키: `Cmd + ,`

3. **Platforms 탭 선택:**

   - 설정 창 상단의 `Platforms` 탭 클릭
   - 또는 `Components` 탭 (구버전 Xcode)

4. **iOS 시뮬레이터 런타임 설치:**

   - `iOS` 섹션에서 다운로드 가능한 런타임 찾기
   - 다운로드 아이콘(↓) 또는 `Download` 버튼 클릭
   - 설치 과정이 시작되면 완료될 때까지 대기 (시간이 소요될 수 있음)

5. **설치 확인:**
   - 설치가 완료되면 `Xcode` → `Open Developer Tool` → `Simulator` 메뉴로 이동
   - 시뮬레이터 목록이 나타나는지 확인

### 방법 2: Xcode의 Window 메뉴에서 확인

1. **Xcode 실행**

2. **Devices and Simulators 창 열기:**

   - `Window` → `Devices and Simulators`
   - 단축키: `Shift + Cmd + 2`

3. **Simulators 탭 선택**

4. **+ 버튼 클릭:**

   - 왼쪽 하단의 `+` 버튼 클릭
   - 시뮬레이터 추가 창이 열림

5. **시뮬레이터 추가:**
   - Device Type: 원하는 기기 선택 (예: iPhone 15 Pro)
   - OS Version: 설치할 iOS 버전 선택
   - 만약 OS Version이 비어있다면, Xcode Settings의 Platforms 탭에서 먼저 다운로드해야 합니다

### 방법 3: Command Line으로 확인

터미널에서 Xcode의 Components 확인:

```bash
# Xcode Command Line Tools 확인
xcode-select -p

# Xcode 버전 확인
xcodebuild -version
```

## 주의사항

- **인터넷 연결 필요**: 시뮬레이터 런타임 다운로드에는 안정적인 인터넷 연결이 필요합니다
- **용량**: iOS 시뮬레이터 런타임은 몇 GB의 용량이 필요합니다 (보통 5-10GB)
- **시간**: 다운로드 및 설치에는 시간이 걸릴 수 있습니다 (인터넷 속도에 따라 다름)

## 설치 후 확인

1. **시뮬레이터 목록 확인:**

   - `Window` → `Devices and Simulators` → `Simulators` 탭
   - 설치된 시뮬레이터 목록이 보여야 합니다

2. **시뮬레이터 실행:**

   - 목록에서 원하는 시뮬레이터 선택
   - `Boot` 버튼 클릭
   - 또는 `Xcode` → `Open Developer Tool` → `Simulator`에서 실행

3. **Expo와 연동:**
   - 시뮬레이터가 실행된 상태에서
   - 터미널에서 `npm start` 실행
   - `i` 키를 눌러 Expo 앱 실행

## 문제 해결

### 시뮬레이터 런타임이 다운로드되지 않는 경우

1. **Xcode 재시작**
2. **인터넷 연결 확인**
3. **디스크 공간 확인** (최소 10GB 이상 권장)
4. **Apple ID 로그인 확인**: Xcode → Settings → Accounts

### 여전히 목록이 비어있는 경우

1. **Xcode 완전 종료 후 재시작**
2. **Mac 재시작**
3. **Xcode 업데이트 확인**: App Store에서 Xcode 최신 버전 확인

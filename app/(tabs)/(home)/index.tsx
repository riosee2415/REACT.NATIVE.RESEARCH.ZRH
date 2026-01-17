import { BlurView } from "expo-blur";
import { usePathname, useRouter } from "expo-router";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function Index() {
  const router = useRouter();
  const pathname = usePathname();
  const insets = useSafeAreaInsets();

  const isLogged = false;

  return (
    <View
      style={[
        styles.container,
        {
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
          paddingHorizontal: insets.left,
          paddingRight: insets.right,
        },
      ]}
    >
      {/*  */}
      <BlurView intensity={70} style={styles.header}>
        <Image
          source={require("../../../assets/images/react-logo.png")}
          style={styles.headerLogo}
        />

        {!isLogged && (
          <TouchableOpacity
            style={styles.loginBtn}
            onPress={() => router.navigate("/login")}
          >
            <Text style={styles.loginBtnText}>Login</Text>
          </TouchableOpacity>
        )}
      </BlurView>
      {/*  */}

      {/*  */}
      {isLogged && (
        <>
          <View style={styles.tabContainer}>
            <View style={styles.tab}>
              <TouchableOpacity onPress={() => router.push(`/`)}>
                <Text style={{ color: pathname === "/" ? "purple" : "gray" }}>
                  For You
                </Text>
              </TouchableOpacity>
            </View>

            <View style={styles.tab}>
              <TouchableOpacity onPress={() => router.push(`/following`)}>
                <Text style={{ color: pathname === "/" ? "gray" : "purple" }}>
                  Following
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </>
      )}

      {/*  */}
      <View>
        <TouchableOpacity onPress={() => router.push(`/@zerocho/post/1`)}>
          <Text>게시글1</Text>
        </TouchableOpacity>
      </View>

      <View>
        <TouchableOpacity onPress={() => router.push(`/@zerocho/post/2`)}>
          <Text>게시글2</Text>
        </TouchableOpacity>
      </View>

      <View>
        <TouchableOpacity onPress={() => router.push(`/@zerocho/post/3`)}>
          <Text>게시글3</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  tabContainer: {
    flexDirection: "row",
  },

  tab: {
    flex: 1,
  },

  header: {
    alignItems: "center",
    backgroundColor: "white",
    paddingHorizontal: 20,
  },

  headerLogo: {
    width: 42,
    height: 42,
  },

  loginBtn: {
    position: "absolute",
    right: 20,
    backgroundColor: "black",
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },

  loginBtnText: {
    color: "white",
  },
});

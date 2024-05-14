import { Text, SafeAreaView } from "react-native";
import tw from "tailwind-react-native-classnames";

const Home = () => {
  return (
    <SafeAreaView style={tw`bg-red-200 h-full`}>
      <Text style={tw`text-red-500`}>Home lorem455</Text>
    </SafeAreaView>
  );
};

export default Home;

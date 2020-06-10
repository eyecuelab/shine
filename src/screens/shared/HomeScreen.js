import React from "react";
import styled from "styled-components";
import { FontAwesome5 } from "@expo/vector-icons";

export default class HomeScreen extends React.Component {
  render() {
    return (
      <Container>
        <SafeAreaView>
          <Button 
            onPress={this.props.navigation.openDrawer}
          >
            <FontAwesome5 name="bars" size={24} color="#161924" />
          </Button>  
          <ScreenContainer>
            <Text>{this.props.name}</Text>
            {/* {this.props.navigation.navigate(`{this.props.navigation.route}`)}  */}
          </ScreenContainer>
        </SafeAreaView>
      </Container>
    );
  }  
}

// export default function HomeScreen({ navigation }) {
//   return (
//     <ScreenContainer>
//       <Button
//         onPress={() => navigation.navigate('CleanerProfile')}
//         title="Go to cleaner profile"
//       />
//     </ScreenContainer>
//   );
// }    

const Container = styled.View`
  flex: 1;
  background-color: #fff;
`;  

const SafeAreaView = styled.SafeAreaView`
  flex: 1;
`;

const Button = styled.TouchableOpacity`
  align-items: flex-end;
  margin: 16px;
`;

const ScreenContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const Text = styled.Text`
  color: black;
  font-size: 20px;
  font-weight: 500;
`;

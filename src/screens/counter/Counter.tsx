import React, { PureComponent } from 'react';
import styled from 'styled-components/native';
import { Button } from '../../components/button/Button';
import { connect } from 'react-redux';
import { uiActionCreators } from '../../redux/modules/data/actions';
import { Dispatch } from 'redux';
import { Navigation } from 'react-native-navigation';

const Main = styled.View`
  flex: 1;
  padding: 16px;
  background-color: #fff;
`;

const Content = styled.View`
  margin-bottom: 16px;
`;

const Text = styled.Text`
  font-size: 21px;
  font-weight: 200;
`;

const Actions = styled.View`
  flex-direction: row;
`;

const Spacer = styled.View`
  width: 16px;
`;

const ActionButton = styled(Button)`
  flex: 1;
`;

interface IProps {
  ui: any;
  increment: () => {};
  decrement: () => {};
}

class CounterScreen extends PureComponent<IProps> {

  static navigationOptions = {
    topBar: {
      title: {
        text: 'Counter',
      },
    },
  };

  constructor(props: any) {
    super(props);
    Navigation.events().bindComponent(this);
  }

  render() {
    const { ui, increment, decrement } = this.props;

    return (
      <Main testID="COUNTER_SCREEN">
        <Content>
          <Text>Counter: {ui.counter}</Text>
        </Content>
        <Actions>
          <ActionButton
            title="Decrement"
            onPress={decrement}
            testID="BUTTON_DECREMENT"
          />
          <Spacer />
          <ActionButton
            title="Increment"
            onPress={increment}
            testID="BUTTON_INCREMENT"
          />
        </Actions>
      </Main>
    );
  }
}

const mapDispatchToProps = (dispatch: Dispatch, ownProps: any) => ({
  increment: () => dispatch(uiActionCreators.increment()),
  decrement: () => dispatch(uiActionCreators.decrement()),
})

const mapStateToProps = (state: any, ownProps: any) => ({
  ui: state.data.ui
})

export default connect(mapStateToProps, mapDispatchToProps)(CounterScreen);


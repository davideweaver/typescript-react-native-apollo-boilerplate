import * as React from 'react';
import { TextInput } from 'react-native';

interface IProps {
    onSubmit: (text: string) => void;
    placeholder?: string;
}

interface IState {
    text: string;
}

class MyTextInput extends React.Component<IProps, IState> {
    public state = {
        text: '',
    };

    public render() {
        const { placeholder } = this.props;

        return (
            <TextInput
                style={{ height: 40, borderWidth: 0 }}
                placeholder={placeholder}
                onSubmitEditing={this.onSubmit}
                onChangeText={this.onChange}
                value={this.state.text}
            />
        );
    }

    private onSubmit = () => {
        this.props.onSubmit(this.state.text);
        this.setState({ text: '' });
    }

    private onChange = (text: string) => {
        this.setState({ text });
    }
}

export default MyTextInput;

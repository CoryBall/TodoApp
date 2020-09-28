import React, {useState} from 'react';
import {View, Text, Button, FlatList, ListRenderItem, TouchableHighlight, SafeAreaView} from 'react-native';
import {listStyles} from './listStyle';
import {TodoItem, useCreateTodoItemMutation} from '../../generated/graphql';
import CheckBox from '@react-native-community/checkbox';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faTrash, faCheck, faPlus} from '@fortawesome/free-solid-svg-icons';
import {COLORS} from '../../utils/constants/Colors';

interface TodoListProps {
    title: string,
    listData: any;
    delete?: any;
    complete?: any;
    variant: 'todo' | 'complete'
}

export const TodoList: React.FC<TodoListProps> = (props: TodoListProps) => {
    const [showNew, setShowNew] = useState(false);
    const [ addTodoItem, {loading : addLoading, data: addData }] = useCreateTodoItemMutation();

    function addNewItem(text : string) {
        addTodoItem({variables: {title : text}});
    }

    const renderItem: ListRenderItem<TodoItem> = ({item}) => (
        <View style={listStyles.item} key={item.id.toString()}>
            <View style={listStyles.textContainer}>
                {!item.isDeleted && !item.isCompleted && (
                    <View style={listStyles.checkBoxContainer}>
                        <CheckBox value={item.isCompleted} onValueChange={() => props.complete(item)}/>
                    </View>
                )}
                <Text style={listStyles.text}>{item.title}</Text>
            </View>

            {item.isCompleted && (
                <FontAwesomeIcon icon={faCheck} size={20} color={COLORS.primary}/>
            )}
            {props.delete !== undefined && (
                <TouchableHighlight onPress={() => props.delete(item.id)}>
                    <FontAwesomeIcon icon={faTrash} size={20} color={COLORS.danger}/>
                </TouchableHighlight>
            )}

        </View>
    );
    return (
        <>
            <View style={listStyles.background}>
                <Text style={listStyles.header}>{props.title}</Text>
                <View style={listStyles.addButton}>
                    <TouchableHighlight onPress={() => setShowNew(!showNew)}>
                        <FontAwesomeIcon icon={faPlus} size={30} color={COLORS.primary}/>
                    </TouchableHighlight>
                </View>

                {showNew &&
                <View style={listStyles.item}>
                    <View style={listStyles.textContainer}>
                        <Text style={listStyles.text}>fdsa</Text>
                    </View>
                </View>
                }

                {props.listData !== undefined && props.listData.length > 0 ? (
                    <View style={listStyles.scrollView}>
                        <FlatList<TodoItem> data={props.listData} renderItem={renderItem}/>
                    </View>
                ) : (
                    <Text>No Data</Text>
                )}
            </View>
        </>
    );
};

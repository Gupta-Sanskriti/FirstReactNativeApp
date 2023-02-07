import { useState } from "react";
import { Alert, Button, StyleSheet, Text, View , ScrollView} from 'react-native';


const Header = () =>{
    const [count, setCount] = useState(0);
    return(
        <View>
            <View className="flex mt-9 justify-center items-center bg-slate-500 ">
                <Text className="text-2xl p-5 text-white" >My First App</Text>
            </View>







            {/* <Text className="p-5"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus asperiores deleniti, voluptates maiores atque quis adipisci quia dicta voluptas? Eum itaque sequi tempora, esse obcaecati aliquid excepturi quos, magnam rerum similique unde quis neque ipsam praesentium qui adipisci nesciunt! Iure dolore nemo pariatur suscipit saepe quis recusandae ad harum, aliquam deserunt voluptates reprehenderit iusto soluta dignissimos ducimus ab sit neque culpa iste consectetur sapiente explicabo veritatis expedita fugit! Est nulla corporis possimus ipsam unde? Enim deleniti autem, nulla fuga odit nostrum, quidem perspiciatis modi ipsum rerum est eos maiores tempore voluptates aperiam blanditiis at natus culpa accusantium mollitia nesciunt eveniet.</Text>
            <View className="flex-row">
                <Button title="Click me" onPress={()=>{Alert.alert("Simple Button pressed", "hi there", [
                    {
                        text: "Cancel",
                        onPress: () => { console.log("Cancel Pressed")},
                        style:"cancel"
                    },
                    {
                        text: "Ok",
                        onPress:()=>{console.log("okay Pressed")}

                    }
                ])}} className="p-20"/> 
                <Button title="other button" onPress={()=>{Alert.alert("thi")}} className=" flex-wrap justify-end" />
            </View>
            <ScrollView className="mx-20">
                <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio iure, atque earum sint eligendi aliquid iste, quo ullam tempore provident distinctio ipsum, porro nisi! Fugiat voluptas veritatis animi numquam autem. Alias quasi placeat explicabo animi enim praesentium culpa. Nemo, nihil. Saepe tempora ipsam voluptatum alias assumenda recusandae officia praesentium animi sequi repudiandae aut culpa nisi voluptatem esse earum non dolorem repellat eius odio minima perspiciatis, eaque illo expedita corrupti? Nesciunt id illum eveniet commodi delectus. Consectetur praesentium necessitatibus incidunt magni iure nam rerum unde quo. Nesciunt eveniet illum ratione officiis suscipit perferendis. Rerum nesciunt harum autem doloribus quis repellendus blanditiis nemo distinctio, numquam cumque eligendi unde fugiat reiciendis praesentium sit perferendis! Sint vel, modi facilis hic aperiam similique libero adipisci alias quisquam corporis quo. Possimus similique totam expedita, harum commodi inventore, amet illo quia sit iure ad quas sequi deserunt fuga, repudiandae quibusdam nisi voluptates provident ducimus alias nemo quam. Nostrum quibusdam facilis excepturi libero consequuntur voluptate quas odio repellendus eaque sunt. Ea voluptatibus error fuga sequi, nisi veniam eos quisquam deserunt ullam reprehenderit modi sint, pariatur porro quaerat vitae aut eius sapiente nam doloribus excepturi laboriosam dolores, dicta quas necessitatibus. Dicta nostrum voluptatum sit sint qui itaque dolorem saepe?</Text>
                <Text>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate illo voluptatibus delectus quo reprehenderit blanditiis consequuntur nobis totam soluta eos sapiente, saepe deserunt dolorum ea? Corporis non quas excepturi. A cum cumque, nulla temporibus debitis adipisci, tempora, quis ipsum tempore recusandae ipsa? Molestiae neque, laboriosam veniam commodi labore iure nostrum ab cupiditate veritatis placeat vero, eum necessitatibus, enim quam aperiam nam possimus consequatur tempore perspiciatis quis! Ex, quasi dolorem eveniet accusamus sunt accusantium numquam nesciunt architecto est quis autem molestiae natus perferendis fugiat cupiditate vel illum dolor omnis similique aliquam temporibus distinctio ratione deserunt error. Iusto omnis vel ducimus quibusdam, in libero est ipsam quam veritatis atque sapiente, amet maiores fugit! Tenetur ipsa nam molestiae atque quod reiciendis, vitae excepturi eos reprehenderit tempora laborum quibusdam quos aliquam eaque odit, aperiam rem praesentium explicabo at beatae ducimus? Alias perspiciatis perferendis aspernatur eum tempora numquam itaque quisquam tempore velit, quaerat placeat. Molestias, iste voluptates ab, exercitationem incidunt temporibus repellat nemo eaque, sint ea id! Voluptas eius vitae ab natus, suscipit earum alias vel possimus perferendis, quia fugiat nemo ipsam. Quaerat tempore quasi similique harum nihil recusandae minus repudiandae molestiae dolores sed possimus, hic ipsum quas laborum iure facilis, obcaecati eum! Vero tempora necessitatibus quo voluptatem architecto similique est amet distinctio eius, blanditiis soluta possimus beatae commodi quasi in debitis iure, nostrum doloribus neque fugit accusamus voluptate temporibus explicabo. Rem, exercitationem autem similique, quasi praesentium quidem quae culpa reiciendis et velit dignissimos suscipit, ullam sapiente laudantium. Amet dolorem consequuntur minima, tempore dolore velit dolor distinctio vero debitis. Illum deserunt, in voluptatibus ad eos hic cumque optio amet impedit corrupti, vero doloremque rem ducimus vitae consequuntur fugit. Eius maiores iusto quae minus molestias modi rerum rem in aliquid numquam ducimus tempora nesciunt error, qui delectus. Dicta minus reprehenderit amet deserunt magni placeat saepe omnis.</Text>
            </ScrollView>

            <View className="flex-row fixed bottom-0 justify-between p-2.5 border-red-400 border-2">
                <Text className="p-2" >Increase decrease the counter </Text>
                <View className="flex-row justify-between">
                    <Button className="p-10" title="+" onPress={()=>{setCount(count+1) 
                        console.log(count)
                    }} color="red"/>
                    <Text className="p-2">{count}</Text>
                    <Button title="-" on onPress={()=>{setCount(count-1)}}/>
                </View>
            </View> */}
            
            {/* </View> */}
        </View>
    )
}


export default Header;
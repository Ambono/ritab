export default function MessagesDisplay(props){

console.log(props.myMessages);

const displayMymessages = (props) => {
   const {myMessages} = props;
console.log("message length in message display: ", myMessages.length)
console.log("messages in message display: ", myMessages)
if(myMessages.length > 0) {
    return(
        myMessages.map((myMessage, index) => {
            return(
                <div className ="" key={myMessage.id}>
                  
                    <p className="">{myMessage.created_at}</p>
                    <p className="">{myMessage.gender}</p>
                    <p className="">{myMessage.firstName}</p>
                    <p className="">{myMessage.lastName}</p>
                    <p className="">{myMessage.email}</p>
                    <p className="">{myMessage.phoneNumber}</p>
                    <p className="">{myMessage.yourmessage}</p>
                    <p className="">{myMessage.response}</p>
                </div>
            )
        })
    )
}
else{
    return (<h3>No message</h3>)
}
}
    return (
        <>
        {displayMymessages(props)}
        </>
    )
}
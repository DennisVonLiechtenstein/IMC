import React, {Component,useState} from "react";
//import { View, Text, StyleSheet,Button} from "react-native";
//import DigitaNumero from "./src/DigitaNumero";
//import { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput, Image,ImageBackground } from "react-native";



export default function App() {
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");
  const [result, setResult] = useState("");
  
  
  
  const calcularIMC = () => {
    
    const alturaMs = parseFloat(altura);
    const pesoKg = parseFloat(peso);
    const pre = (alturaMs * alturaMs);
    const imc = (pesoKg/pre);
   // const imc =  (pesoKg / (alturaMs * alturaMs));

    if (imc < 18.5) {
      return setResult(
        `IMC:${imc.toFixed(2)},você está com Baixo peso.`
      );
    } else if (imc > 18.5 && imc < 24.9) {
      return setResult(
        `IMC:${imc.toFixed(2)},você está com o Peso normal.`
      );
    } else if (imc > 25.0 && imc < 29.9) {
      return setResult(
        `IMC:${imc.toFixed(2)},você está com Sobrepeso.`
      );
    } else if (imc > 30.0) {
      return setResult(
        `IMC:${imc.toFixed(2)},você está com Obesidade.`
      );
    }
  };
  return (
    <ImageBackground source={require("./assets/imagem/balanca.jpeg")} style={styles.container}>
    <View style={styles.container}>
      <Text style={styles.tittle}>Calculadora de IMC</Text>
      <View style={styles.subContainer}>
        <Text style={styles.text}>Digite seu peso:</Text>
        <TextInput
          style={styles.input}
          placeholder="ex:80.0"
          value={peso}
          keyboardType="number-pad"
          onChangeText={(e) => setPeso(e)}
        />

        <Text style={styles.text}>
          Digite sua altura:
        </Text>
        <TextInput
          style={styles.input}
          placeholder="ex:1.90"
          keyboardType="number-pad"
          value={altura}
          onChangeText={(e) => setAltura(e)}
          // onEndEditing={limparValores}
        />
      </View>
      
      <View style={styles.botoes}>
      <Button 
        title="Calcular IM"
        color={"green"}
  
        onPress={() => calcularIMC()}
      />
      </View>
      <View style={styles.botoes2}>
      <Button 
        title="Limpar valores"
        color={"red"}
        onPress={() => {
          setPeso(" ");
          setAltura(" ");
          setResult(" ");
        }}
        
      />
      </View>
      <TextInput
        style={styles.mostrarResult}
        value={result}
        editable={false}
        multiline={true}
      />
      
      

    </View>
    <View style={styles.subContainer2}>
        <Text>Aluno Dennis,</Text>
        </View>
    <View style={styles.subContainer2}>
        <Text>CEFET Campo-Belo MG Informática 2023</Text>
        </View>
    
    </ImageBackground>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#7998", //"#7998"
    alignItems: "center",
    paddingTop:2,   
  },
  subContainer: {
    width: 420,
    height: "40%",
    backgroundColor: "#c5f1",
    borderTopWidth: 2,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderBottomWidth: 2,
    marginTop: 20,
    marginBottom: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  botoes:{
    top:-10,
  },
  botoes2:{
    top:10,
  },
  subContainer2:{
    color: "black",
    fontSize: 50,
    fontFamily: "arial",
    top:-15,
    justifyContent: "center",
    alignItems: "center",
  },
  tittle: {
    color: "black",
    fontSize: 30,
    fontFamily: "arial",
    marginTop:-5,
  },
  text: {
    color: "black",
    fontSize: 20,
    fontFamily: "arial",
  },
  input: {
    height: 40,
    width: "25%",
    backgroundColor: "#f4f4f4",
    fontSize: 17,
    borderRadius: 15,
    textAlign: "center",
    marginTop: 15,
    marginBottom: 15,
    borderTopWidth: 2,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderBottomWidth: 2,
  },
  mostrarResult: {
    height: 100,      
    width: 400,    //420
    backgroundColor: "#fff",
    color: "#000",
    fontSize: 17,
    textAlign: "center",
    marginTop: 20,
    marginBottom: 20,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    top:20,
  },
  Button:{
   margin:15,
  },
  image: {
    width: 150,  //400
    height: 180,  //250
    margin: 10,   //35
  },
});
/*const tabelaIMC=()=>{
  return (
    <table border={1}  style={{borderCollapse:'collapse'}}>
      <thead>
        <tr>
          <th>
            Referências
          </th>
          <th>
            IMC
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Abaixo do peso</td>
          <td>Abaixo de 18,5</td>
        </tr>
        <tr>
          <td>Peso normal</td>
          <td>Entre 18,5 e 24,9</td>
        </tr>
        <tr>
          <td>Sobrepeso</td>
          <td>Entre 25 e 29,9</td>
        </tr>
        <tr>
          <td>Obesidade grau 1</td>
          <td>Entre 30 e 34,9</td>
        </tr>
        <tr>
          <td>Obesidade grau 2</td>
          <td>Entre 35 e 39,9</td>
        </tr>
        <tr>
          <td>Obesidade grau 3 ou mórbida</td>
          <td>Maior que 40</td>
        </tr>
      </tbody>
    </table>


  )
}
const v_peso=(p,sp)=>{
  return(
    <div>
      <label>Seu peso:
        <input type="text" value={p} onChange={(e)=>{sp(e.target.value)}}/>
      </label>
    </div>
  )
}
const v_altura=(a,sa)=>{
  return(
    <div>
      <label>Seu peso:
        <input type="text" value={a} onChange={(e)=>{sa(e.target.value)}}/>
      </label>
    </div>
  )
}
const calculo=(p,a,sr)=>{
  
    const calc=(props:any)=>{
      p/(a*a)
    }
    return(
      <div>
        <button onClick={calc}>Calcular</button>
      </div>
  )
}

const v_resultado=(r)=>{
  return(
    <div>
      <p>Resultado:{r.toFixed(2)}</p>
    </div>

  )
}

  


export default function App(){

  const [peso,setPeso]=useState(0)
  const [altura,setAltura]=useState(0)
  const [resultado,setResultado]=useState(0)

  return(
   <>
   {v_peso(peso,setPeso)}
   {v_altura(altura,setAltura)}
   {calculo(peso,altura,setResultado)}
   {v_resultado(resultado)}
   {tabelaIMC()}
   </>
  );
}
     /*<View style={estilos.container}>
      <Text>Cálculo IMC</Text>
      

      

     </View>
    
     
     );      
   }
 }*/
   
   /*const estilos = StyleSheet.create({
     container:{
       flex: 1,
       backgroundColor:'red',
       borderColor:'blue',
       justifyContent: 'center',
       alignItems: 'center',
      
     },
 
     fonte: {
       fontSize: 100,
     },
   });*/




var clicar_botao=document.querySelector(".botao"); 


clicar_botao.addEventListener('click',function (){  

    var A =document.getElementById("valor1").value;
    var B =document.getElementById("valor2").value;
    var C =document.getElementById("valor3").value; 
    var b = Number(B);
    var a = Number(A);
    var c = Number(C);
    var delta = (b*b)- (4*a*c);  
    raiz_delta = Math.sqrt(delta); 



    function expressao(){ 
        if(b>0 && c>0) {
            document.getElementById("função").innerHTML=("F(x): "+A+"x²"+"+"+B+"x"+"+"+C);
            console.log("positivos");
        }  
        if(b<0){
            document.getElementById("função").innerHTML=("F(x): "+A+"x²"+B+"x"+"+"+C);
        } 
        
        if(c<0){
            document.getElementById("função").innerHTML=("F(x): "+A+"x²"+"+"+B+"x"+C);
        } 
        
        if(b<0 && c<0){
            document.getElementById("função").innerHTML=("F(x): "+A+"x²"+B+"x"+C);
        }
        
        
        
        // ausência de coeficientes 
        
        if(!a && !b && !c){ 
        
            alert("Favor, inserir coeficientes!");
            reset();
        
        
        
        } 
        
        if(!a && !b){  
        
        
            document.getElementById("função").innerHTML=("");
            document.getElementById("condição_raiz").innerHTML=("");
        
            document.getElementById("raiz1").innerHTML=("");
            document.getElementById("raiz2").innerHTML=(""); 
        
            alert("Função constante!"); 
        
            reset();
               
            
            
        
        }
        
        if (!a &&  c>0){ 
        
            document.getElementById("função").innerHTML=("F(x): "+B+"x"+"+"+C);
        
        }
        
        if (!a && c<0){ 
        
            document.getElementById("função").innerHTML=("F(x): "+B+"x"+C);
        
        }
        
        if (!b && c>0){
            document.getElementById("função").innerHTML=("F(x): "+A+"x²"+"+"+C);
        } 
        if (!b && c<0){
            document.getElementById("função").innerHTML=("F(x): "+A+"x²"+C);
        }
        
        if(!c && b>0){ 
        
            document.getElementById("função").innerHTML=("F(x): "+A+"x²"+"+"+B+"x");
        
        } 
        
        if(!c && b<0){ 
        
            document.getElementById("função").innerHTML=("F(x): "+A+"x²"+B+"x");
        
        }
        
        if(!c && !b){
        
            document.getElementById("função").innerHTML=("F(x): "+A+"x²");
        }
        
        if(!a && !c){ 
        
            
        
            alert("Função linear!");  
            document.getElementById("função").innerHTML=("");
        
            reset();
            
        
           
        }

    
        
    } 

    function Delt(){ 

        const elemento_info_raiz= document.getElementById("condição_raiz");
    
        if(delta <0){
    
            elemento_info_raiz.className="sem_raiz_real";
    
            const info1= elemento_info_raiz.innerHTML=("A função não possui raiz real!");
    
            
          
            
        }
    
        if(delta >0){
    
            elemento_info_raiz.className="com_raiz_real"; 
    
            const info2= elemento_info_raiz.innerHTML=("A função possui duas raízes reais disitntas"); 
    
            
    
        }
        
        if(delta ==0){
    
            elemento_info_raiz.className="unica_raiz"; 
    
            const info3 = elemento_info_raiz.innerHTML=("A função possui uma única raiz  real");
    
        
        }
    
    
        
    } 
    
     function Raiz1(){
    
        var x1= (-b + raiz_delta) / (2*a);
    
        document.getElementById("raiz1").innerHTML=("Primeira raiz:"+x1.toFixed(2));
    
    } 
    
    function Raiz2(){ 
    
    var x2= (-b - raiz_delta) / (2*a); 
    
    document.getElementById("raiz2").innerHTML=("Segunda raiz:"+x2.toFixed(2));
    

    }  
    
    




    expressao();
    Delt();
    Raiz1();
    Raiz2();

        
        
    
     
      

  
 
    
  

}) 



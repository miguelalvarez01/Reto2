const ApiUrl_Message = "https://g285736289b516c-reto1.adb.eu-frankfurt-1.oraclecloudapps.com/ords/admin/message/message";

class message{
	static insert(){

		//var Valor = {id:document.getElementById("id").value, name:document.getElementById("name").value,email:"a.com",age:"25"};
		const Valor = {id:$("#id_Message").val(),
						messagetext:$("#messagetext").val()}
			
		$.ajax({
			url: ApiUrl_Message,
			type: "POST",
			dataType:"json",
			crossDomain: true,
			contentType: "application/json",
			data: JSON.stringify(Valor),
			complete: function(response){
				if (response.status == 201) {
					message.findAll();
					alert("Message was added successfully");
				}else{
					alert("Message was not added");
					console.log(response);
				}
			}
		});
		
	}


	static findAll(){
		$.ajax({
			type: "GET",
			url: ApiUrl_Message,
			dataType: "json",
			crossDomain: true,
			contentType: "application/json",
			success: function(data){
				$("#tbody_Message").html("");//Para vaciar la tabla
					for(let index = 0;index < data.items.length;index++){
						//templates string - plantilla
						$("#tbody_Message").append(`<tr>
							<td>${data.items[index].id}</td>
							<td>${data.items[index].messagetext}</td>
						</tr>`);	
					}
			},
			error: function(){		
				alert("Message was not loaded");
			}
		});		
	}

	static findById(id){
		
	}

	static update(){//revisar
		//const actualizar = {id:$("#id").val(), name:"isabella",email:"a.com",age:"25"}
		const actualizar = {id:$("#id_Message").val(),
							name:$("#messagetext").val()
						}

		$.ajax({
			url: ApiUrl_Message,
			type: "PUT",
			dataType:"json",
			crossDomain: true,
			contentType: "application/json",
			data: JSON.stringify(actualizar),
			complete: function(response){
				if (response.status == 201) {
					client.findAll();
					alert("Message was update successfully");
				}else{
					alert("Message was not update");
				}
			}
		});
	}

	static deleteById(){
		const borrar = {id:$("#id_Message").val()}
		$.ajax({
			url: ApiUrl_Message,
			type: "DELETE",
			dataType:"json",
			crossDomain: true,
			data: JSON.stringify(borrar),
			contentType: "application/json",
			complete: function(response){
				if (response.status == 204) {
					alert("Client was delete");
				}else{
					alert("Client was not delete");
				}
			}
		});
		
	}

}
const ApiUrl = "https://g285736289b516c-reto1.adb.eu-frankfurt-1.oraclecloudapps.com/ords/admin/client/client";

class client{
	static insert(){

		//var Valor = {id:document.getElementById("id").value, name:document.getElementById("name").value,email:"a.com",age:"25"};
		const Valor = {id:$("#id_Client").val(),
						name:$("#name_Client").val(),
						email:$("#email_Client").val(),
						age:$("#age_Client").val()}
			
		$.ajax({
			url: ApiUrl,
			type: "POST",
			dataType:"json",
			crossDomain: true,
			contentType: "application/json",
			data: JSON.stringify(Valor),
			complete: function(response){
				if (response.status == 201) {
					client.findAll();
					alert("Client was added successfully");
				}else{
					alert("Client was not added");
					console.log(response);
				}
			}
		});
		
	}


	static findAll(){
		$.ajax({
			type: "GET",
			url: ApiUrl,
			dataType: "json",
			crossDomain: true,
			contentType: "application/json",
			success: function(data){
				$("#tbody_Client").html("");//Para vaciar la tabla
					for(let index = 0;index < data.items.length;index++){
						//templates string - plantilla
						$("#tbody_Client").append(`<tr>
							<td>${data.items[index].id}</td>
							<td>${data.items[index].name}</td>
							<td>${data.items[index].email}</td>
							<td>${data.items[index].age}</td>
						</tr>`);	
					}
			},
			error: function(){		
				alert("Client was not loaded");
			}
		});		
	}

	static findById(id){
		
	}

	static update(){//revisar
		//const actualizar = {id:$("#id").val(), name:"isabella",email:"a.com",age:"25"}
		const actualizar = {id:$("#id_Client").val(),
							name:$("#name_Client").val(),
							email:$("#email_Client").val(),
							age:$("#age_Client").val()
						}

		$.ajax({
			url: ApiUrl,
			type: "PUT",
			dataType:"json",
			crossDomain: true,
			contentType: "application/json",
			data: JSON.stringify(actualizar),
			complete: function(response){
				if (response.status == 201) {
					client.findAll();
					alert("Client was update successfully");
				}else{
					alert("Client was not update");
				}
			}
		});
	}

	static deleteById(){
		const borrar = {id:$("#id_Client").val()}
		$.ajax({
			url: ApiUrl,
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
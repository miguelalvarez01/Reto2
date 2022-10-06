const ApiUrl_Cloud = "https://g285736289b516c-reto1.adb.eu-frankfurt-1.oraclecloudapps.com/ords/admin/cloud/cloud";

class cloud{
	static insert(){

		//var Valor = {id:document.getElementById("id").value, name:document.getElementById("name").value,email:"a.com",age:"25"};
		const Valor = {id:$("#id_Cloud").val(),
						brand:$("#brand_Cloud").val(),
						model:$("#model_Cloud").val(),
						category_id:$("#category_id_Cloud").val(),
						name:$("#name_Cloud").val()}
			
		$.ajax({
			url: ApiUrl_Cloud,
			type: "POST",
			dataType:"json",
			crossDomain: true,
			contentType: "application/json",
			data: JSON.stringify(Valor),
			complete: function(response){
				if (response.status == 201) {
					cloud.findAll();
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
			url: ApiUrl_Cloud,
			dataType: "json",
			crossDomain: true,
			contentType: "application/json",
			success: function(data){
				$("#tbody_Cloud").html("");//Para vaciar la tabla
					for(let index = 0;index < data.items.length;index++){
						//templates string - plantilla
						$("#tbody_Cloud").append(`<tr>
							<td>${data.items[index].id}</td>
							<td>${data.items[index].brand}</td>
							<td>${data.items[index].model}</td>
							<td>${data.items[index].category_id}</td>
							<td>${data.items[index].name}</td>
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
		const actualizar = {id:$("#id_Cloud").val(),
							brand:$("#brand_Cloud").val(),
							model:$("#model_Cloud").val(),
							category_id:$("#category_id_Cloud").val(),
							name:$("#name_Cloud").val()
							}

		$.ajax({
			url: ApiUrl_Cloud,
			type: "PUT",
			dataType:"json",
			crossDomain: true,
			contentType: "application/json",
			data: JSON.stringify(actualizar),
			complete: function(response){
				if (response.status == 201) {
					cloud.findAll();
					alert("Client was update successfully");
				}else{
					alert("Client was not update");
				}
			}
		});
	}

	static deleteById(){
		const borrar = {id:$("#id_Cloud").val()}
		$.ajax({
			url: ApiUrl_Cloud,
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
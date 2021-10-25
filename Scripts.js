//METODOS Specialty

//METODO POST
function registrarSpecialty(){
    var data={
        name: $("#name_specialty").val(),
        description:$("#description_spc").val(),


    }
    var dataToSend = JSON.stringify(data);
    console.log(dataToSend);

    //Transferencia de Datos a la Base de datos
    $.ajax({
        dataType:'json',
        data:dataToSend,
        url:"http://155.248.203.61:8080/api/Specialty/save",
        type:'POST',
        contentType:'application/json',
        success:function(response){
            console.log(response);
        },
        error:function(jqXHR, textStatus, erroThrown){

        }

    });
}

//METODO GET
function getSpecialty(){

    //consulta de Datos a la Base de datos
    $.ajax({
        dataType:'json',
        url:"http://155.248.203.61:8080/api/Specialty/all",
        type:'GET',
        success:function(response){
            console.log(response);
            var datos = response;
            for(i=0; i<=datos.length; i++){
                $("#tSpecialty").append("<tr>");
                $("#tSpecialty").append("<td>"+datos[i].id+"</td>");
                $("#tSpecialty").append("<td>"+datos[i].name+"</td>");
                $("#tSpecialty").append("<td>"+datos[i].description+"</td>");
                $("#tSpecialty").append('<td><button  onclick="deleteSpecialty('+datos[i].id+')" class="btn btn-danger">Borrar</button><button  onclick="getSpecialtyId('+datos[i].id+')" class="btn btn-success" data-toggle="modal" data-target="#myModal">Update</button></td>');
                $("#tSpecialty").append("<tr>");
            }
            
        },
        error:function(jqXHR, textStatus, erroThrown){

        }

    });
}

//METODO GET:ID
function getSpecialtyId(idSpecialty){

    //consulta de Datos a la Base de datos
    $.ajax({
        dataType:'json',
        url:"http://155.248.203.61:8080/api/Specialty/"+idSpecialty,
        type:'GET',
        success:function(response){
            var datos = response;
            console.log(datos)
            $("#id_update").val(datos.id),
            $("#name_update").val(datos.name),
            $("#description_update").val(datos.description)

            
        },
        error:function(jqXHR, textStatus, erroThrown){
        }

    });
}
//METODO PUT
function updateSpecialty(){
    var data={
        id: $("#id_update").val(),
        name:$("#name_update").val(),
        description: $("#description_update").val(),

    }
    var dataToSend = JSON.stringify(data);
    console.log(dataToSend);

    //Transferencia de Datos a la Base de datos
    $.ajax({
        dataType:'json',
        data:dataToSend,
        url:"http://155.248.203.61:8080/api/Specialty/update",
        type:'PUT',
        contentType:'application/json',
        success:function(response){
            console.log(response);
        },
        error:function(jqXHR, textStatus, erroThrown){

        }

    });
}

//METODO DELETE
function deleteSpecialty(idSpecialty){
    var data={
        id: idSpecialty
    }
    var dataToSend = JSON.stringify(data);
    console.log(dataToSend);

    //Transferencia de Datos a la Base de datos
    $.ajax({
        dataType:'json',
        data:data,
        url:"http://155.248.203.61:8080/api/Specialty/"+idSpecialty,
        type:'DELETE',
        contentType:'application/json',
        success:function(response){
            console.log(idSpecialty);
        },
        error:function(jqXHR, textStatus, erroThrown){

        }

    });
}

//METODOS Doctor

//METODO POST
function registrarDoctor(){
    var data={
        department: $("#department_dc").val(),
        year:$("#year_dc").val(),
        specialty: {
            id:$("#specialty_dc").val()
        },
        name:$("#name_dc").val(),
        description: $("#description_dc").val(),
    }
    var dataToSend = JSON.stringify(data);
    console.log(dataToSend);

    //Transferencia de Datos a la Base de datos
    $.ajax({
        dataType:'json',
        data:dataToSend,
        url:"http://155.248.203.61:8080/api/Doctor/save",
        type:'POST',
        contentType:'application/json',
        succes:function(response){
            console.log(response);
        },
        error:function(jqXHR, textStatus, erroThrown){

        }

    });
}

//METODO GET
function getDoctor(){

    //consulta de Datos a la Base de datos
    $.ajax({
        dataType:'json',
        url:"http://155.248.203.61:8080/api/Doctor/all",
        type:'GET',
        success:function(response){
            console.log(response);
            var datos = response;
            for(i=0; i<=datos.length; i++){
                $("#tDoctor").append("<tr>");
                $("#tDoctor").append("<td>"+datos[i].id+"</td>");
                $("#tDoctor").append("<td>"+datos[i].name+"</td>");
                $("#tDoctor").append("<td>"+datos[i].specialty.name+"</td>");
                $("#tDoctor").append("<td>"+datos[i].year+"</td>");
                $("#tDoctor").append('<td><button  onclick="deleteDoctor('+datos[i].id+')" class="btn btn-danger">Borrar</button><button  onclick="getDoctorId('+datos[i].id+')" class="btn btn-success" data-toggle="modal" data-target="#myModal2">Update</button></td>');
                $("#tDoctor").append("<tr>");
            }
            
        },
        error:function(jqXHR, textStatus, erroThrown){

        }

    });
}

//METODO GET:ID
function getDoctorId(idDoctor){

    //consulta de Datos a la Base de datos
    $.ajax({
        dataType:'json',
        url:"http://155.248.203.61:8080/api/Doctor/"+idDoctor,
        type:'GET',
        success:function(response){
            var datos = response;
            console.log(datos)
            $("#idDc_update").val(datos.id),
            $("#departmentDc_update").val(datos.department),
            $("#yearDc_update").val(datos.year),
            $("#specialtyDc_update").val(datos.specialty.id),
            $("#nameDc_update").val(datos.name),
            $("#descriptionDc_update").val(datos.description)
            
        },
        error:function(jqXHR, textStatus, erroThrown){

        }

    });
}
//METODO PUT
function updateDoctor(){
    var data={
        id: $("#idDc_update").val(),
        department:$("#departmentDc_update").val(),
        year: $("#yearDc_update").val(),
        specialty:{
            id:$("#specialtyDc_update").val()
        },
        name: $("#nameDc_update").val(),
        description: $("#descriptionDc_update").val()
    }
    var dataToSend = JSON.stringify(data);
    console.log(dataToSend);

    //Transferencia de Datos a la Base de datos
    $.ajax({
        dataType:'json',
        data:dataToSend,
        url:"http://155.248.203.61:8080/api/Doctor/update",
        type:'PUT',
        contentType:'application/json',
        succes:function(response){
            console.log(response);
        },
        error:function(jqXHR, textStatus, erroThrown){

        }

    });
}

//METODO DELETE
function deleteDoctor(idDoctor){
    var data={
        id: idDoctor
    }
    var dataToSend = JSON.stringify(data);
    console.log(dataToSend);

    //Transferencia de Datos a la Base de datos
    $.ajax({
        dataType:'json',
        data:dataToSend,
        url:"http://155.248.203.61:8080/api/Doctor/"+idDoctor,
        type:'DELETE',
        contentType:'application/json',
        success:function(response){
            console.log(idDoctor);
        },
        error:function(jqXHR, textStatus, erroThrown){

        }

    });
}

//METODOS Client

//METODO POST
function registrarClient(){
    var data={
        name:$("#name_client").val(),
        email:$("#email_client").val(),
        password:$("#password_client").val(),
        age:$("#age_client").val()
    }
    var dataToSend = JSON.stringify(data);
    console.log(dataToSend);

    //Transferencia de Datos a la Base de datos
    $.ajax({
        dataType:'json',
        data:dataToSend,
        url:"http://155.248.203.61:8080/api/Client/save",
        type:'POST',
        contentType:'application/json',
        succes:function(response){
            console.log(response);
        },
        error:function(jqXHR, textStatus, erroThrown){

        }

    });
}
//METODO GET
function getClient(){

    //consulta de Datos a la Base de datos
    $.ajax({
        dataType:'json',
        url:"http://155.248.203.61:8080/api/Client/all",
        type:'GET',
        success:function(response){
            console.log(response);
            var datos = response;
            for(i=0; i<=datos.length; i++){
                $("#tClientes").append("<tr>");
                $("#tClientes").append("<td>"+datos[i].idClient+"</td>");
                $("#tClientes").append("<td>"+datos[i].name+"</td>");
                $("#tClientes").append("<td>"+datos[i].email+"</td>");
                $("#tClientes").append("<td>"+datos[i].age+"</td>");
                $("#tClientes").append('<td><button  onclick="deleteClient('+datos[i].idClient+')" class="btn btn-danger">Borrar</button><button  onclick="getClientId('+datos[i].idClient+')" class="btn btn-success" data-toggle="modal" data-target="#myModal3">Update</button></td>');
                $("#tClientes").append("<tr>");
            }
            
        },
        error:function(jqXHR, textStatus, erroThrown){

        }

    });
}
//METODO GET:ID
function getClientId(idClient){

    //consulta de Datos a la Base de datos
    $.ajax({
        dataType:'json',
        url:"http://155.248.203.61:8080/api/Client/"+idClient,
        type:'GET',
        success:function(response){
            var datos = response;
            console.log(datos)
            $("#idCl_update").val(datos.idClient),
            $("#nameCl_update").val(datos.name),
            $("#emailCl_update").val(datos.email),
            $("#passwordCl_update").val(datos.password),
            $("#ageCl_update").val(datos.age)
        },
        error:function(jqXHR, textStatus, erroThrown){

        }

    });
}

//METODO PUT
function updateClient(){
    var data={
        idClient: $("#idCl_update").val(),
        name:$("#nameCl_update").val(),
        email: $("#emailCl_update").val(),
        password: $("#passwordCl_update").val(),
        age: $("#ageCl_update").val()
    }
    var dataToSend = JSON.stringify(data);
    console.log(dataToSend);

    //Transferencia de Datos a la Base de datos
    $.ajax({
        dataType:'json',
        data:dataToSend,
        url:"http://155.248.203.61:8080/api/Client/update",
        type:'PUT',
        contentType:'application/json',
        succes:function(response){
            console.log(response);
        },
        error:function(jqXHR, textStatus, erroThrown){

        }

    });
}

//METODO DELETE
function deleteClient(idClient){
    var data={
        idClient: idClient
    }
    var dataToSend = JSON.stringify(data);
    console.log(dataToSend);

    //Transferencia de Datos a la Base de datos
    $.ajax({
        dataType:'json',
        data:dataToSend,
        url:"http://155.248.203.61:8080/api/Client/"+idClient,
        type:'DELETE',
        contentType:'application/json',
        success:function(response){
            console.log(idClient);
        },
        error:function(jqXHR, textStatus, erroThrown){

        }

    });
}


//METODOS MENSAJE

//METODO POST
function registrarMessage(){
    var data={
        messageText:$("#message_msg").val(),
        client:{
            idClient:$("#message_doctor").val()
        },
        doctor:{
            id:$("#message_client").val()
        }

    }
    var dataToSend = JSON.stringify(data);
    console.log(dataToSend);

    //Transferencia de Datos a la Base de datos
    $.ajax({
        dataType:'json',
        data:dataToSend,
        url:"http://155.248.203.61:8080/api/Message/save",
        type:'POST',
        contentType:'application/json',
        succes:function(response){
            console.log(response);
        },
        error:function(jqXHR, textStatus, erroThrown){

        }

    });
}

//METODO GET
function getMessage(){

    //consulta de Datos a la Base de datos
    $.ajax({
        dataType:'json',
        url:"http://155.248.203.61:8080/api/Message/all",
        type:'GET',
        success:function(response){
            console.log(response);
            var datos = response;
            for(i=0; i<=datos.length; i++){
                $("#tMensajes").append("<tr>");
                $("#tMensajes").append("<td>"+datos[i].idMessage+"</td>");
                $("#tMensajes").append("<td>"+datos[i].messageText+"</td>");
                $("#tMensajes").append("<td>"+datos[i].doctor.name+"</td>");
                $("#tMensajes").append("<td>"+datos[i].client.name+"</td>");
                $("#tMensajes").append('<td><button  onclick="deleteMessage('+datos[i].idMessage+')" class="btn btn-danger">Borrar</button><button  onclick="getMessageId('+datos[i].idMessage+')" class="btn btn-success" data-toggle="modal" data-target="#myModal4">Update</button></td>');
                $("#tMensajes").append("<tr>");
            }
            
        },
        error:function(jqXHR, textStatus, erroThrown){

        }

    });
}

//METODO GET:ID
function getMessageId(idMensaje){

    //consulta de Datos a la Base de datos
    $.ajax({
        dataType:'json',
        url:"http://155.248.203.61:8080/api/Message/"+idMensaje,
        type:'GET',
        success:function(response){
            var datos = response;
            console.log(datos)
            $("#IdMessage_update").val(datos.idMessage),
            $("#txtMessage_update").val(datos.messageText),
            $("#idDoctor_update").val(datos.doctor.id),
            $("#idClient_update").val(datos.client.idClient)
            
        },
        error:function(jqXHR, textStatus, erroThrown){

        }

    });
}

function updateMessage(){
    var data={
       idMessage: $("#IdMessage_update").val(),
       messageText: $("#txtMessage_update").val(),
       client:{
           idClient:$("#idDoctor_update").val()
       },
       doctor:{
           id:$("#idClient_update").val()
       }
    }
    var dataToSend = JSON.stringify(data);
    console.log(dataToSend);

    //Transferencia de Datos a la Base de datos
    $.ajax({
        dataType:'json',
        data:dataToSend,
        url:"http://155.248.203.61:8080/api/Message/update",
        type:'PUT',
        contentType:'application/json',
        succes:function(response){
            console.log(response);
        },
        error:function(jqXHR, textStatus, erroThrown){

        }

    });
}

//METODO DELETE
function deleteMessage(idMensaje){
    var data={
        idMessage: idMensaje
    }
    var dataToSend = JSON.stringify(data);
    console.log(dataToSend);

    //Transferencia de Datos a la Base de datos
    $.ajax({
        dataType:'json',
        data:dataToSend,
        url:"http://155.248.203.61:8080/api/Message/"+idMensaje,
        type:'DELETE',
        contentType:'application/json',
        success:function(response){
            console.log(idMensaje);
        },
        error:function(jqXHR, textStatus, erroThrown){

        }

    });
}


//METODOS Reservation

//METODO POST
function registrarReservation(){
    var data={
        startDate:$("#reservation_startdate").val(),
        devolutionDate:$("#reservation_devolution").val(),
        client:{
            idClient:$("#reservation_doctor").val()
        },
        doctor:{
            id:$("#reservation_client").val()
        }


    }
    var dataToSend = JSON.stringify(data);
    console.log(dataToSend);

    //Transferencia de Datos a la Base de datos
    $.ajax({
        dataType:'json',
        data:dataToSend,
        url:"http://155.248.203.61:8080/api/Reservation/save",
        type:'POST',
        contentType:'application/json',
        succes:function(response){
            console.log(response);
        },
        error:function(jqXHR, textStatus, erroThrown){

        }

    });
}

//METODO GET
function getReservation(){

    //consulta de Datos a la Base de datos
    $.ajax({
        dataType:'json',
        url:"http://155.248.203.61:8080/api/Reservation/all",
        type:'GET',
        success:function(response){
            console.log(response);
            var datos = response;
            for(i=0; i<=datos.length; i++){
                $("#tReservation").append("<tr>");
                $("#tReservation").append("<td>"+datos[i].idReservation+"</td>");
                $("#tReservation").append("<td>"+datos[i].startDate+"</td>");
                $("#tReservation").append("<td>"+datos[i].devolutionDate+"</td>");
                $("#tReservation").append("<td>"+datos[i].client.name+"</td>");
                $("#tReservation").append("<td>"+datos[i].doctor.name+"</td>");
                $("#tReservation").append('<td><button  onclick="deleteReservation('+datos[i].idReservation+')" class="btn btn-danger">Borrar</button><button  onclick="getReservationId('+datos[i].idReservation+')" class="btn btn-success" data-toggle="modal" data-target="#myModal5">Update</button></td>');
                $("#tReservation").append("<tr>");
            }
            
        },
        error:function(jqXHR, textStatus, erroThrown){

        }

    });
}

//METODO GET:ID
function getReservationId(idReserv){

    //consulta de Datos a la Base de datos
    $.ajax({
        dataType:'json',
        url:"http://155.248.203.61:8080/api/Reservation/"+idReserv,
        type:'GET',
        success:function(response){
            var datos = response;
            console.log(datos);
            $("#IdReservation_update").val(datos.idReservation),
            $("#starDate_update").val(datos.starDate),
            $("#devolutionDate_update").val(datos.devolutionDate),
            $("#idClientRes_update").val(datos.client.idClient),
            $("#idDoctorRes_update").val(datos.doctor.id)

            
        },
        error:function(jqXHR, textStatus, erroThrown){

        }

    });
}

function updateReservation(){
    var data={
        idReservation:$("#IdReservation_update").val(),
        startDate:$("#startDate_update").val(),
        devolutionDate:$("#devolutionDate_update").val(),
        client:{
            idClient:$("#idClientRes_update").val()
        },
        doctor:{
            id:$("#idDoctorRes_update").val()
        }

    }
    var dataToSend = JSON.stringify(data);
    console.log(dataToSend);

    //Transferencia de Datos a la Base de datos
    $.ajax({
        dataType:'json',
        data:dataToSend,
        url:"http://155.248.203.61:8080/api/Reservation/update",
        type:'PUT',
        contentType:'application/json',
        succes:function(response){
            console.log(response);
        },
        error:function(jqXHR, textStatus, erroThrown){

        }

    });
}

//METODO DELETE
function deleteReservation(idReservation){
    var data={
        idReservation:idReservation
    }
    var dataToSend = JSON.stringify(data);
    console.log(dataToSend);

    //Transferencia de Datos a la Base de datos
    $.ajax({
        dataType:'json',
        data:dataToSend,
        url:"http://155.248.203.61:8080/api/Reservation/"+idReservation,
        type:'DELETE',
        contentType:'application/json',
        success:function(response){
            console.log(idMensaje);
        },
        error:function(jqXHR, textStatus, erroThrown){

        }

    });
}


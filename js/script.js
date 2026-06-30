let inventario = [
    {
        nombre: "Martillo de Carpintero",
        categoria: "Herramienta Manual",
        departamento: "Mantenimiento",
        stock: 15
    },
    {
        nombre: "Taladro Inalámbrico",
        categoria: "Herramienta Eléctrica",
        departamento: "Taller",
        stock: 8
    },
    {
        nombre: "Guantes de Seguridad",
        categoria: "Implemento de Protección",
        departamento: "Seguridad",
        stock: 50
    },
    {
        nombre: "Casco de Seguridad",
        categoria: "Implemento de Protección",
        departamento: "Seguridad",
        stock: 30
    },
    {
        nombre: "Llave Inglesa",
        categoria: "Herramienta Manual",
        departamento: "Mantenimiento",
        stock: 22
    }
];

const tablaInventario = document.getElementById("tablaInventario");
const txtNombre = document.getElementById("txtNombre");
const txtCategoria = document.getElementById("txtCategoria");
const txtDepartamento = document.getElementById("txtDepartamento");
const txtStock = document.getElementById("txtStock");
const btnAgregar = document.getElementById("btnAgregar");

function agregarItem() {
    const nuevoItem = {
        nombre: txtNombre.value,
        categoria: txtCategoria.value,
        departamento: txtDepartamento.value,
        stock: parseInt(txtStock.value)
    };
    
    inventario.push(nuevoItem);

    txtNombre.value = "";
    txtCategoria.value = "";
    txtDepartamento.value = "";
    txtStock.value = "";

    mostrarInventario();
}

function mostrarInventario() {
    tablaInventario.innerHTML = "";

    inventario.forEach((item) => {
        tablaInventario.innerHTML += `
           <tr>
             <td>${item.nombre}</td>
             <td>${item.categoria}</td>
             <td>${item.departamento}</td>
             <td>${item.stock}</td>
          </tr>
        `;
    });  
}

mostrarInventario();

btnAgregar.addEventListener("click", agregarItem);
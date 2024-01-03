import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import {useForm} from 'react-hook-form'

function WithHeaderExample() {
    const {register, formState:{errors}, watch, handleSubmit}=useForm()

    const onSubmit=(data)=>{
        console.log(data)
    }

    const incluirPais = watch('incluirPais')
    return (
        <Card>
            <Card.Header className="text-center bg-dark text-white">Formulario</Card.Header>
            <Card.Body>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Form.Group className="mb-3">
                        <Form.Label>Nombre de Empresa</Form.Label>
                        <Form.Control type="nombre" placeholder="Ingrese el nombre de la empresa" {...register('nombre',{required:true})}/>
                        {errors.nombre?.type==='required' && <p className="text-danger">El campo NOMBRE EMPRESA es requerido</p>}
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Categoría</Form.Label>
                        <Form.Control type="categoria" placeholder="Ingrese de la categoria" {...register('categoria',{required:true})}/>
                        {errors.categoria?.type==='required' && <p className="text-danger">El campo CATEGORIA es requerido</p>}
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Año de Fundación</Form.Label>
                        <Form.Control type="edad" placeholder="Ingrese el Año de fundación" {...register('años')}/>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Correo Corporativo</Form.Label>
                        <Form.Control type="correo" placeholder="name@example.com" {...register('correo')}/>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Telefono</Form.Label>
                        <Form.Control type="telefono" placeholder="Ingrese el telefono" {...register('telefono')}/>
                    </Form.Group>


                    <Form.Group className="mb-3">
                        <Form.Check type="checkbox" label="Internacional" {...register('incluirPais')}/>
                    </Form.Group>

                    {
                        incluirPais && (
                            <Form.Group className="mb-3">
                                <Form.Label>¿De qué país es la empresa?</Form.Label>
                                <Form.Control type="pais" placeholder="Ingrese su país" {...register('pais')}/>
                            </Form.Group>
                        )
                    }

                    <Button variant="primary" type="submit">
                        Enviar datos
                    </Button>
                </Form>
            </Card.Body>
        </Card>
    );
}

export default WithHeaderExample;
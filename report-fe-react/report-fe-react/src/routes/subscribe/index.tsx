import Footer from '../../components/footer';
import './styles.css';


export default function Subscribe() {

    return (
        <>
        <main>
            <section id="register-section" >
                <form className="register-container">

                    <h2>Dados do Usuário</h2>

                    <input name="regi-inputName" id="regi-inputName" className="register-form" type="text" placeholder="Nome" />
                    <div className="error-message" data-error="name"></div>

                    <input name="regi-email" id="regi-email" className="register-form" type="text" placeholder="Email" />
                    <div className="error-message" data-error="email"></div>

                    <input name="regi-phone" id="regi-phone" className="register-form" type="text" placeholder="Celular" />
                    <div className="error-message" data-error="phone"></div>

                    <input name="regi-password" id="regi-password" className="register-form" type="password" placeholder="Senha" />
                    <div className="error-message" data-error="password"></div>

                    <input name="regi-birthDate" id="regi-birthDate" className="register-form" type="text" placeholder="Nascimento" />
                    <div className="error-message" data-error="birthDate"></div>

                   
                    <select className="register-form gkc-select" name="regi-role" id="regi-role" required>
                        <option value="" disabled selected>Perfil</option>
                        <option value="1">Admin</option>
                        <option value="2">User</option>
                        <option value="3">Visitor</option>
                    </select>
                </form>

                <div className="register-container">
                    <button type="reset" className="btn btn-white">Cancelar</button>
                    <button type="submit" className="btn btn-blue">Salvar</button>
                </div>

            </section>
        </main>
        <Footer/>
        </>
        
    );
}
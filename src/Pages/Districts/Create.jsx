import '../../styles/districts.scss';
import { useContext, useState } from "react"
import { actionsList, Store } from "../../store";
import { useFile } from "../../Use/useFile";
import Link from '../../Components/Link';

export default function Create() {

    const [yourName, setYourName] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [budget, setBudget] = useState(0);
    const [amount, setAmount] = useState(0);
    const { dispach } = useContext(Store);
    const [file, readFile, remImage] = useFile();

    const create = _ => {
        dispach(actionsList['districts-create']({
            yourName,
            title,
            description,
            budget,
            amount,
            file
        }));
        setYourName('');
        setTitle('');
        setDescription('');
        setBudget(0);
        setAmount(0);
        remImage();
    }

    return (
        <section className="container-fluid back-ground-image2">
            <div className="d-flex justify-content-center">
                <div className="col-md-8">
                    <div className="card m-5">
                        <div className="card-body">
                            <div className="mb-3">
                                <label className="form-label">Pateik savo pasiūlymą</label>
                                <input type="text" className="form-control" value={title} onChange={e => setTitle(e.target.value)} />
                                <div className="form-text">Nurodyk pasiūlymo pavadinimą</div>
                            </div>
                            <div className="mb-3">
                                <textarea maxlength='1000' minlength='20'
                                    type="text" className="form-control" value={description} onChange={e => setDescription(e.target.value)} />
                                <div className="form-text">Aprašyk idėją</div>
                            </div>
                            <div className="mb-3">
                                <input type="number" min="10" max="10000" className="form-control" value={budget} onChange={e => setBudget(e.target.value)} />
                                <div className="form-text">Nurodyk reikiamą biudžetą</div>
                            </div>
                            <div className="mb-3">
                                <input type="text" className="form-control" value={yourName} onChange={e => setYourName(e.target.value)} />
                                <div className="form-text">Įrašyk savo vardą</div>
                            </div>
                            <div className="mb-3">
                                <input className="form-control form-control-sm" id="formFile" type="file" onChange={readFile} />
                                <div className="form-text">Pridėk paveikslėlį</div>
                            </div>
                            <div>
                                {
                                    file
                                        ? <img className="upload-image mb-3" src={file} alt="to upload" />
                                        : null
                                }

                            </div>

                            <button className="m-1 btn btn-danger" onClick={remImage}>Pakeisk paveikslėlį</button>
                            <button type="button" className="m-1 btn btn-primary" onClick={create}>Pateik</button>
                            <button type="button" className="m-1 btn btn-primary"><Link to="home" className="nav-link active">Persigalvojai?</Link></button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
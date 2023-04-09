import { useContext, useEffect, useState } from 'react';
import { actionsList, Store } from '../../store';
import { useFile } from '../../Use/useFile';

export function EditDistrict() {
    const { store, dispach, imgUrl } = useContext(Store);
    const [file, readFile, remImage] = useFile();
    const [delImg, setDelImg] = useState(false);

    const [title, setTitle] = useState('');
    const [photo, setPhoto] = useState(null);

    useEffect(() => {
        if (null === store) {
            return;
        }
        setTitle(store.data.title);
        setPhoto(store.data.photo);
    }, [store]);

    const edit = (_) => {
        dispach(
            actionsList['districts-edit'](
                {
                    ...store.data,
                    title,
                    file,
                    delImg
                },
                store.data.id
            )
        );
    };

    const delImage = (_) => {
        setDelImg(true);
    };

    const cancelImage = (_) => {
        remImage();
        setDelImg(false);
    };

    return (
        <div className="stories container-fluid back-ground-image2">
            <div className="d-flex justify-content-center">
                <div className="col-md-6 mt-5">
                    <div className="card card-hover shadow d-flex align-content-stretch justify-content-start m-2 p-2 w-150 stories">
                        <div className="card-body">
                            <div className="mb-3">
                                <label className="form-label">
                                    <h5>Redaguok bendruomenės idėjas</h5>
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                />
                                <div className="form-text fst-italic">
                                    Tikslink idėjos pavadinimą
                                </div>
                            </div>
                            <div className="mb-3">
                                <input
                                    className="form-control form-control-sm"
                                    id="formFileE"
                                    type="file"
                                    onChange={readFile}
                                />
                                <div className="form-text fst-italic">
                                    Įkelk kitą paveikslą
                                </div>
                            </div>
                            <div>
                                {file ? (
                                    <img
                                        className="upload-image object-fit-cover mb-3"
                                        src={file}
                                        alt="to upload"
                                    />
                                ) : photo && !delImg ? (
                                    <img
                                        className="upload-image object-fit-cover"
                                        src={imgUrl + photo}
                                        alt=""
                                    />
                                ) : (
                                    <img
                                        className="upload-image object-fit-cover "
                                        src={imgUrl + 'no_img.png'}
                                        alt=""
                                    />
                                )}
                            </div>
                            <button
                                className="m-1 btn btn-danger"
                                onClick={delImage}
                            >
                                Ištrinti
                            </button>
                            <button
                                className="m-1 btn btn-warning"
                                onClick={cancelImage}
                            >
                                Atšaukti
                            </button>
                            <button
                                type="button"
                                className="btn btn-primary"
                                onClick={edit}
                            >
                                Keisti
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

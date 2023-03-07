import "./UploadPage.scss";
import uploadPreview from "../../assets/images/Upload-video-preview.jpg";
import publishIcon from "../../assets/icons/publish.svg";

function UploadPage() {
    return (
        <main>
            <section className="upload">
                <h1 className="upload__page-title">Upload Video</h1>
                {/* no action in form as per sprint-2 requirements, functionality of the form not required */}
                <form action="" className="upload__form">
                    <div className="upload__thumbnail-container">
                        <h3 className="upload__thumbnail-label">Video Thumbnail</h3>
                        <img className="upload__thumbnail-img" src={uploadPreview} alt="upload preview" />
                    </div>
                    <div className="upload__inputs-container">
                        <label className="upload__input-label" htmlFor="videoTitle">
                            Title Your Video
                        </label>
                        <input
                            className="upload__title-input"
                            type="text"
                            name="videoTitle"
                            id="videoTitle"
                            placeholder="Add a title to your video"
                        />
                        <label className="upload__input-label" htmlFor="videoDesc">
                            Add a Video Description
                        </label>
                        <textarea
                            className="upload__desc-input"
                            name="videoDesc"
                            id="videoDesc"
                            placeholder="Add a description to your video"
                        ></textarea>
                    </div>
                    <button type="submit" className="button button__publish">
                        <img src={publishIcon} alt="publish icon" className="button__publish-icon" />
                        Publish
                        <div className="button__publish-icon button--hidden"></div>
                    </button>
                </form>
                <div className="upload__cancel">
                    <p>Cancel</p>
                </div>
            </section>
        </main>
    );
}

export default UploadPage;

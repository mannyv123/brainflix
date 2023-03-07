import "./UploadPage.scss";
import uploadPreview from "../../assets/images/Upload-video-preview.jpg";

function UploadPage() {
    return (
        <main>
            <section className="upload">
                <h1 className="upload__page-title">Upload Video</h1>
                {/* no action in form as per sprint-2 requirements, functionality of the form not required */}
                <form action="" className="upload__form">
                    <h3 className="upload__thumbnail-label">Video Thumbnail</h3>
                    <img className="upload__thumbnail-img" src={uploadPreview} alt="upload preview image" />
                </form>
            </section>
        </main>
    );
}

export default UploadPage;

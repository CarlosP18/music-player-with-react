
export function ButtonsBar() {
    return (
        <>
            <div className="container">
                <div class="card text-center">
                    <div class="card-heade bg-dark">
                    <i class="fab fa-spotify "></i>
                    <span className="spotify ml-2">Spotify</span>
                     </div>
                    <div class="card-body">
                        <h5 class="card-title">Special title treatment</h5>
                        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                    <div class="card-footer justify-content-center bg-dark">
                        <button type="button" className="btn btn-dark"><i class="fas fa-random"></i></button>
                        <button type="button" className="btn btn-dark"><i className="fas fa-backward"></i></button>
                        {/* <button type="button" className="btn btn-dark"><i className="fas fa-pause-circle"></i></button> */}
                        <button type="button" className="btn btn-dark"><i className="fas fa-play-circle"></i></button>
                        <button type="button" className="btn btn-dark"><i className="fas fa-forward"></i></button>
                        <button type="button" className="btn btn-dark"><i className="fas fa-redo-alt"></i></button>
                        <div className="float-right ml=0">
                            <button type="button" className="btn btn-dark"><i class="fas fa-volume-down"></i></button>
                            {/* <button type="button" className="btn btn-dark"><i class="fas fa-volume-mute"></i></button> */}
                            <input type="range" min="0" max="100"  className="slider"/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
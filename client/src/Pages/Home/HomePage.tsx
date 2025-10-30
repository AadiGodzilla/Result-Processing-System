import { useNavigate, type NavigateFunction } from "react-router-dom";
import styles from "./HomePage.module.css";
import {
    useEffect,
    useRef,
    useState,
    type FormEvent,
    type ReactNode,
} from "react";
import ModifyPopUp from "../../Popups/ModifyPopUp/ModifyPopUp";

type PopUpProps = {
    onClose: () => void;
    children?: ReactNode;
};

function HomePage() {
    const navigate: NavigateFunction = useNavigate();
    const mainDivRef = useRef<HTMLDivElement>(null);

    const [updateOpen, setUpdateOpen] = useState<boolean>(false);

    useEffect(() => {
        if (updateOpen) {
            mainDivRef.current!.style.filter = "brightness(0.5)";
            mainDivRef.current!.style.pointerEvents = "none";
        } else {
            mainDivRef.current!.style.filter = "none";
            mainDivRef.current!.style.pointerEvents = "auto";
        }
    }, [updateOpen]);

    return (
        <>
            {updateOpen ? (
                <ModifyPopUp onClose={() => setUpdateOpen(false)} />
            ) : (
                ""
            )}
            <div className={styles.main} ref={mainDivRef}>
                <div className={styles.header}>
                    <div className={styles.logo}>RESULT PROCESSING SYSTEM</div>
                    <div
                        className={styles.account_holder}
                        onClick={() => navigate("/login")}
                    >
                        <img
                            src="/src/assets/react.svg"
                            className={styles.account_image}
                        />
                        <div className={styles.account_info}>
                            <h3 className={styles.account_name}>
                                AADIKSHAR BHANDARI
                            </h3>
                            <h5 className={styles.account_status}>STUDENT</h5>
                        </div>
                    </div>
                </div>
                <div className={styles.operations_box}>
                    <div className={styles.search}>
                        <select name="" id="">
                            <option value="">Program</option>
                        </select>
                        <select name="" id="">
                            <option value="">Batch</option>
                        </select>
                        <button>SEARCH</button>
                    </div>
                    <div className={styles.operations}>
                        <button>REMOVE</button>
                        <button onClick={() => setUpdateOpen(!updateOpen)}>
                            MODIFY
                        </button>
                        <button>ADD</button>
                    </div>
                </div>
                <div className={styles.main_container}>
                    <div className={styles.name_list}>
                        <h3>NAME LIST</h3>
                    </div>
                    <div className={styles.main_body}>
                        <div className={styles.body_info}>
                            <h1>Information</h1>
                            <p>Name: Aadikshar Bhandari</p>
                            <p>
                                Program: Bachelors of Computer Application(BCA)
                            </p>
                            <p>Batch: 2023</p>
                            <p>Date of Birth: 27/05/2006</p>
                            <p>TU Registration ID: 622-2023-2080-501</p>
                            <p>Father's Name: Anjan Bhandari</p>
                            <p>Mother's Name: Kamala Bhattarai</p>
                            <p>Mobile Number: +977 9849531455</p>
                            <p>Home Address: Santinagar, Kathmandu</p>
                        </div>
                        <div className={styles.body_photo}>
                            <h1 style={{ textAlign: "center" }}>Photo</h1>
                            <div className={styles.photo_frame}></div>
                            <p>Symbol No.: 0123456789</p>
                            <p>Position: BCA Student</p>
                        </div>
                        <div className={styles.body_result}>
                            <h1>Results</h1>
                            {Array.from({ length: 4 }, (_) => (
                                <div className={styles.result_item}>
                                    <h4 className={styles.result_title}>
                                        1st Semester
                                    </h4>
                                    <table
                                        width={"100%"}
                                        border={1}
                                        className={styles.result}
                                    >
                                        <thead>
                                            <tr>
                                                <th>Subjects(Code)</th>
                                                <th>Subject 1</th>
                                                <th>Subject 2</th>
                                                <th>Subject 3</th>
                                                <th>Subject 4</th>
                                                <th>Subject 5</th>
                                                <th>Total</th>
                                                <th>Result</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th>Marks(GPA)</th>
                                                <td>100</td>
                                                <td>100</td>
                                                <td>100</td>
                                                <td>100</td>
                                                <td>100</td>
                                                <td>100</td>
                                                <td>PASS</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default HomePage;

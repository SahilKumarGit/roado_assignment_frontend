import EachElementComponent from "../eachElementComponent/eachElementComponent";
import "./wordsList.style.css";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import apiUrls from "../../environment";
import { setWordList } from "../../redux/actions";
import { useEffect, useState } from "react";

import LoadingButton from "@mui/lab/LoadingButton";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

const WordsListComponent = () => {
  const wordList = useSelector((state) => state.getWordList.wordList);
  const dispatch = useDispatch();
  useEffect(() => {
    axios.get(apiUrls.list).then((e) => {
      dispatch(setWordList(e.data.data));
      console.log(e.data.data);
    });
  }, []);

  // related to alert box
  const [openAlert, setOpenAlert] = useState(false);
  const [word, setWord] = useState("");
  const [errorInput, setErrorInput] = useState({ status: false, message: "" });
  const [loading, setLoading] = useState(false);
  const actionOnDialog = async () => {
    setErrorInput({ status: false, message: "" });
    if (loading) return;
    console.log(word);
    if (!word)
      return setErrorInput({
        status: true,
        message: "You need to enter a word first.",
      });

    setLoading(true);
    const resc = await axios.post(apiUrls.add, { word }).catch((e) => {
      return e.response.data;
    });
    setLoading(false);
    if (resc.status) {
      setOpenAlert(false);
      setWord("");
      dispatch(setWordList(resc.data.data));
    } else {
      setErrorInput({
        status: true,
        message: resc.message,
      });
    }
  };

  const closeOnDialog = () => {
    if (loading) return;
    setOpenAlert(false);
  };

  return (
    <div className="✏️wordsList">
      <div className="workList">Worlds List</div>
      {wordList.map((e, i) => {
        return <EachElementComponent key={i} data={e} />;
      })}

      <Fab

        onClick={() => {
          setOpenAlert(true);
        }}
        sx={{
          position: "absolute",
          bottom: "16px",
          right: "16px",
          color: "#FFFFFF",
          backgroundColor: "#64244b",
          "&:hover": {
            backgroundColor: "#64244b"
          }
        }}
        aria-label="add"
      >
        <AddIcon />
      </Fab>

      {/* alertBox */}
      <Dialog open={openAlert} sx={{ position: "absolute" }}>
        <DialogTitle>Add to Dictionary</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            label="New Word"
            id="wrdInput"
            type="text"
            fullWidth
            variant="standard"
            error={errorInput.status}
            helperText={errorInput.message}
            value={word}
            onChange={(e) => {
              setWord(e.target.value);
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={closeOnDialog}>Cancel</Button>
          <LoadingButton loading={loading} onClick={actionOnDialog}>
            Add
          </LoadingButton>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default WordsListComponent;

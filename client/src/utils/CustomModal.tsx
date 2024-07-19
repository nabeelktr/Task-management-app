import { Box, Modal } from "@mui/material";
import React from "react";

type Props = {
  open: boolean;
  setOpen: (open: boolean) => void;
  component: any;
  setRoute?: (route: string) => void;
};

const CustomModal: React.FC<Props> = ({
  open,
  setOpen,
  setRoute,
  component: Component,
}) => {
  return (
    <div>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className=" absolute left-[50%] top-[50%] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-[8px] bg-white p-4 shadow outline-none text-black">
          <Component setOpen={setOpen} setRoute={setRoute} />
        </Box>
      </Modal>
    </div>
  );
};

export default CustomModal;

package net.chrisrichardson.ftgo.orderservice.application.sagaparticipants;

public class UndoBeginCancelCommand extends OrderCommand {
  public UndoBeginCancelCommand(long orderId) {
    super(orderId);
  }
}
